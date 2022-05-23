import React, { useEffect, useRef, useState } from 'react'

import Loader from '@/components/Loader'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import { motion } from 'framer-motion'
import useCountry from '@/hooks/useCountry'

export default function Country() {
  const { data } = useCountry()
  const [earthPosition, setEarthPosition] = useState(null)
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setEarthPosition({
        x: width / 2 - 40,
        y: height,
      })
    }
  }, [data])

  if (!data) {
    return <Loader background="bg-primary-orange" />
  }

  console.log(data)

  const { name, number_of_earths } = data

  return (
    <>
      <SlideNavigation currentPage={3} />
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
          <div className="relative flex-1">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-transparent to-primary-orange"
            />
            <svg ref={ref} className="w-full h-full">
              {earthPosition && (
                <>
                  {new Array(Math.ceil(number_of_earths))
                    .fill(0)
                    .map((_, i) => (
                      <motion.circle
                        animate={{
                          x:
                            Math.random() * earthPosition.x * 2 -
                            earthPosition.x,
                          y: Math.random() * earthPosition.y * -0.8,
                          rotate: Math.random() * 360,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 40,
                        }}
                        key={i}
                        r="80"
                        cx={earthPosition.x}
                        cy={earthPosition.y}
                        fill="url(#a)"
                        drag
                        stroke="#fff"
                        className="cursor-grab"
                        whileDrag={{ scale: 1.2 }}
                        dragConstraints={ref}
                        dragElastic={{ left: 0.5, right: 0.5, top: 0.8 }}
                      />
                    ))}
                  <defs>
                    <radialGradient id="a" gradientUnits="userSpaceOnUse">
                      <stop
                        offset="95%"
                        stopColor="#039712"
                        stopOpacity=".85"
                      />
                      <stop offset="10%" stopColor="#035397" />
                    </radialGradient>
                  </defs>
                </>
              )}
            </svg>
          </div>
        </div>
      </TransitionWrapper>
    </>
  )
}
