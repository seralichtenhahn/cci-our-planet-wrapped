import React from 'react'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function Country() {
  // prefetch country data
  useCountry()

  return (
    <>
      <SlideNavigation currentPage={1} />
      <TransitionWrapper delay={1}>
        <div className="flex flex-col justify-center w-full h-full gap-6 px-8 py-8 text-white bg-primary-dark">
          <h2 className="text-4xl font-black text-center uppercase">
            A Story about the climate
          </h2>
        </div>
      </TransitionWrapper>
    </>
  )
}
