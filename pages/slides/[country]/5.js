import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import ReadMoreButton from '@/components/ReadMoreButton'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'

export default function MoveTheDate() {
  return (
    <>
      <SlideNavigation />
      <TransitionWrapper background="bg-secondary-green">
        <div className="flex flex-col w-full h-full gap-8 px-8 pb-4 text-white">
          <div className="flex flex-col gap-2 pt-12">
            <h2 className="text-4xl font-black">#MoveTheDate</h2>
            <p>The current trend is not our destiny</p>
          </div>
          <div className="relative flex items-center justify-center max-w-xl p-8 aspect-square">
            <span className="absolute inline-flex w-[200px] h-[200px] rounded-full opacity-75 animate-ping-slow bg-sky-400"></span>
            <Image
              priority
              width={200}
              height={200}
              src="/images/earth.svg"
              alt="Our planet"
            />
          </div>
          <div className="mt-auto mb-4 space-y-2">
            <p>
              The past does not necessarily determine our future.{' '}
              <strong className="px-1 uppercase rounded bg-accent-red">
                Our current choices do.
              </strong>
            </p>
            <p>
              Through wise, forward-looking decisions, we can turn around
              natural resource consumption trends while improving the quality of
              life for all people.
            </p>
          </div>
          <ReadMoreButton
            subTitle="Be part of the change"
            href="https://movethedate.overshootday.org/"
          >
            Explore the Solutions Map
          </ReadMoreButton>
        </div>
      </TransitionWrapper>
    </>
  )
}
