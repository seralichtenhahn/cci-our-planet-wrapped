import React, { useEffect, useRef, useState } from 'react'
import { format, parseISO } from 'date-fns'

import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '@/components/Loader'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function ShareTheExperience() {
  const { data } = useCountry()

  if (!data) {
    return <Loader background="bg-accent-green" />
  }

  const { name, number_of_earths, overshoot_day, slug } = data

  async function shareResults() {
    const shareData = {
      title: `#${name} Wrapped`,
      text: 'THERE IS ONLY ONE EARTH. But our demand for resources exceeds our planet’s biocapacity.',
      url: `${window.location.protocol}//${window.location.host}/results/${slug}`,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {}
    } else {
      // not supported
      // share with twitter
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareData.text,
      )}&url=${encodeURIComponent(shareData.url)}&hashtags=${encodeURIComponent(
        'MoveTheDate,FootprintNetwork',
      )}&via=EndOvershoot`
      window.open(twitterUrl, '_blank')
    }
  }

  return (
    <>
      <SlideNavigation />
      <TransitionWrapper background="bg-accent-green">
        <div className="flex flex-col w-full h-full gap-4 px-8 pb-4 text-white">
          <div className="mt-12">
            <h2 className="text-3xl font-black text-center uppercase">
              {name} Wrapped
            </h2>
            <p className="text-center">Share the experience!</p>
          </div>
          <div className="mt-auto space-y-2">
            <div className="px-3 py-4 space-y-8 rounded-lg bg-primary-dark">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-center text-accent-red">
                  How many earths would we need if everyone lived like {name}{' '}
                  residents?
                </h3>
                <ul className="flex flex-wrap justify-center gap-2">
                  {[...Array(Math.floor(number_of_earths)).keys()].map((i) => (
                    <li key={i}>
                      <Image
                        priority
                        width={48}
                        height={48}
                        src="/images/earth.svg"
                        alt="Our planet"
                      />
                    </li>
                  ))}
                  {number_of_earths > Math.floor(number_of_earths) && (
                    <li className="relative">
                      <Image
                        priority
                        width={48}
                        height={48}
                        src="/images/earth.svg"
                        alt="Our planet"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-full h-full bg-primary-dark"
                        style={{
                          transform: `translateX(${
                            (number_of_earths - Math.floor(number_of_earths)) *
                            100
                          }%)`,
                        }}
                      />
                    </li>
                  )}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-center text-accent-red">
                  When would Earth Overshoot Day land if the World’s population
                  lived like {name}?
                </h3>
                <p className="text-3xl font-black text-center uppercase">
                  {format(parseISO(overshoot_day), 'dd MMMM yyyy')}
                </p>
              </div>
              <p className="text-center text-accent-red">
                Help to <strong className="text-white">#MoveTheDate</strong> and
                be part of the change!
              </p>
            </div>
          </div>
          <div className="mt-auto space-y-2 text-center">
            <Button
              variant="secondary"
              onClick={shareResults}
              className="z-[100]"
            >
              Share the results
            </Button>
            <Link href="/start">
              <a className="p-2 block relative underline z-[100]">Restart</a>
            </Link>
          </div>
        </div>
      </TransitionWrapper>
    </>
  )
}
