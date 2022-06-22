import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Loader from '@/components/Loader'
import ReadMoreButton from '@/components/ReadMoreButton'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function ShareTheExperience() {
  const { data } = useCountry()

  if (!data) {
    return <Loader background="bg-secondary-green" />
  }

  return (
    <>
      <SlideNavigation />
      <TransitionWrapper background="bg-secondary-green">
        <div className="flex flex-col w-full h-full gap-8 px-8 pb-4 text-white">
          <div className="flex items-center gap-4 pt-12">
            <Image
              priority
              width={48}
              height={48}
              src="/images/earth.svg"
              alt="Our planet"
            />
            <h3 className="text-2xl font-bold">Our Planet Wrapped</h3>
          </div>
          <h2 className="text-3xl font-black uppercase">
            Share your experience
          </h2>
          <div className="mt-auto text-center">
            <ReadMoreButton
              subTitle="Be part of the change"
              href="https://movethedate.overshootday.org/"
            >
              Explore the Solutions Map
            </ReadMoreButton>
            <Link href="/start">
              <a className="p-2 relative underline z-[100]">Restart</a>
            </Link>
          </div>
        </div>
      </TransitionWrapper>
    </>
  )
}
