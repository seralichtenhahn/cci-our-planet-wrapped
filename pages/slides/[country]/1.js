import Loader from '@/components/Loader'
import React from 'react'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function Country() {
  const { data } = useCountry()

  if (!data) {
    return <Loader />
  }

  return (
    <>
      <SlideNavigation currentPage={2} />
      <TransitionWrapper>
        <div className="flex flex-col justify-center w-full h-full gap-6 px-8 py-8 text-white bg-primary-dark">
          <h2 className="text-4xl font-black text-center uppercase">Page 1</h2>
        </div>
      </TransitionWrapper>
    </>
  )
}
