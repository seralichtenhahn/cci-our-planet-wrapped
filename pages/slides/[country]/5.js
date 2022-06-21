import React, { useEffect, useRef, useState } from 'react'

import Loader from '@/components/Loader'
import ReadMoreButton from '@/components/ReadMoreButton'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function MoveTheDate() {
  const { data } = useCountry()

  if (!data) {
    return <Loader background="bg-secondary-green" />
  }

  return (
    <>
      <SlideNavigation />
      <TransitionWrapper background="bg-secondary-green">
        <div className="flex flex-col w-full h-full gap-8 px-8 pb-4 text-white">
          <div className="flex flex-col gap-2 pt-12">
            <h2 className="text-4xl font-black">#MoveTheDate</h2>
            <p>The current trend is not our destiny</p>
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
