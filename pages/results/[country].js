import { format, parseISO } from 'date-fns'

import Button from '@/components/Button'
import Image from 'next/image'
import Loader from '@/components/Loader'
import React from 'react'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function Results() {
  const { data } = useCountry()

  if (!data) {
    return <Loader />
  }

  const { name, number_of_earths, overshoot_day, slug } = data

  return (
    <TransitionWrapper>
      <div className="flex flex-col w-full h-full gap-4 px-4 pb-8 text-white">
        <div className="mt-12">
          <h2 className="text-3xl font-black text-center uppercase">
            {name} Wrapped
          </h2>
        </div>
        <div className="mt-auto space-y-6">
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
                        (number_of_earths - Math.floor(number_of_earths)) * 100
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
            Help to <strong className="text-white">#MoveTheDate</strong> and be
            part of the change!
          </p>
        </div>
        <div className="mt-auto space-y-4 text-center">
          <p className="text-sm font-semibold text-center">
            How many Earths would we need if everyone on the planet lived like
            the residents of your country?
          </p>
          <Button variant="secondary" href="/start">
            Choose Country
          </Button>
        </div>
      </div>
    </TransitionWrapper>
  )
}
