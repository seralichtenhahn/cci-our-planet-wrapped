import React, { useEffect, useRef, useState } from 'react'

import LineChart from '@/components/LineChart'
import Loader from '@/components/Loader'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'
import { useMeasure } from 'react-use'

export default function HistorcialData() {
  const { data } = useCountry()
  const [container, { width, height }] = useMeasure()

  if (!data) {
    return <Loader background="bg-accent-red" />
  }

  const {
    name,
    historical: { number_of_earths },
  } = data

  const NumberOfEarthsDiff =
    (number_of_earths.at(0).value / number_of_earths.at(-1).value) * 100

  return (
    <>
      <SlideNavigation currentPage={5} />
      <TransitionWrapper background="bg-accent-red">
        <div className="flex flex-col w-full h-full gap-8 px-8 text-white">
          <div className="flex flex-col gap-6 pt-12">
            <h2 className="text-4xl font-black uppercase">
              Number of Earths {name} needed over the years
            </h2>
          </div>
          <p className="font-black text-7xl">
            {Math.round(NumberOfEarthsDiff)}%
            <span className="block text-sm font-medium leading-3 uppercase">
              {NumberOfEarthsDiff > 0 ? 'increase' : 'decrease'} since{' '}
              {number_of_earths.at(0).year}
            </span>
          </p>
          <div ref={container} className="flex-1 w-full">
            {height && width && (
              <LineChart
                width={width}
                height={height}
                data={number_of_earths}
              />
            )}
          </div>
        </div>
      </TransitionWrapper>
    </>
  )
}
