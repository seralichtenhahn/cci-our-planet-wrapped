import LineChart from '@/components/LineChart'
import Loader from '@/components/Loader'
import React from 'react'
import ReadMoreButton from '@/components/ReadMoreButton'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import { useMeasure } from 'react-use'
import useWorld from '@/hooks/useWorld'

export default function OvershootDay() {
  const { data } = useWorld()
  const [container, { width, height }] = useMeasure()

  if (!data) {
    return <Loader />
  }

  const {
    historical: { number_of_earths },
  } = data

  return (
    <>
      <SlideNavigation />
      <TransitionWrapper>
        <div className="relative flex flex-col w-full h-full gap-6 px-8 pt-20 pb-4 text-white">
          <h2 className="text-4xl font-black uppercase">
            There is only one earth.
          </h2>
          <p className="font-semibold">
            But our demand for resources exceeds our planets biocapacity.
          </p>
          <div ref={container} className="flex-1 w-full">
            {height && width && (
              <LineChart
                width={width}
                height={height}
                title="Number of Earths needed over the years"
                data={number_of_earths}
                bgColor="#00092C"
                yTicks={7}
                showCircles={false}
                pathGradient={['#FFF', '#FF6363', '#FF6363']}
              />
            )}
          </div>
          <ReadMoreButton href="https://www.footprintnetwork.org/our-work/ecological-footprint/">
            The Ecological Footprint
          </ReadMoreButton>
        </div>
      </TransitionWrapper>
    </>
  )
}
