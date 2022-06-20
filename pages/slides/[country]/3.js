import BallChart from '@/components/BallChart'
import Loader from '@/components/Loader'
import React from 'react'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'
import { useMeasure } from 'react-use'

export default function NumberOfEarths() {
  const [container, { width, height }] = useMeasure()
  const { data } = useCountry()

  if (!data) {
    return <Loader background="bg-primary-orange" />
  }

  console.log(data)

  const { name, number_of_earths } = data

  const earths = new Array(Math.ceil(number_of_earths))
    .fill(0)
    .map((_, i) => ({ r: 1 }))

  return (
    <>
      <SlideNavigation />
      <TransitionWrapper background="bg-primary-orange">
        <div className="flex flex-col w-full h-full text-white">
          <div className="flex flex-col gap-6 px-8 pt-12">
            <h2 className="text-4xl font-black uppercase">
              Number of Earths {name} needs
            </h2>
            <p className="font-black text-7xl">
              {new Intl.NumberFormat('en-GB', {
                maximumSignificantDigits: 2,
              }).format(number_of_earths)}
              {number_of_earths > 1 && (
                <span className="block text-sm font-medium leading-3 uppercase">
                  out of 1
                </span>
              )}
            </p>
          </div>
          <div ref={container} className="relative flex-1 w-full">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-transparent to-primary-orange"
            />
            {height && width && (
              <BallChart width={width} height={height} data={earths} />
            )}
          </div>
        </div>
      </TransitionWrapper>
    </>
  )
}
