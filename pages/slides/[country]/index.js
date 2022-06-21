import { LightBulbIcon } from '@heroicons/react/outline'
import React from 'react'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import { motion } from 'framer-motion'
import useCountry from '@/hooks/useCountry'
import useWorld from '@/hooks/useWorld'

export default function Country() {
  // prefetch country data
  useCountry()
  useWorld()

  return (
    <>
      <SlideNavigation />
      <TransitionWrapper delay={1}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-8 text-white bg-primary-dark">
          <h2 className="text-4xl font-black text-center uppercase">
            A Story about the climate
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 0.5, delay: 2 }}
            className="relative mt-16 space-y-2 text-white/60"
          >
            <LightBulbIcon className="w-6 h-6 mx-auto" />
            <p className="text-center">
              <span className="md:hidden">
                Tap on the right side of the screen to continue...
              </span>
              <span className="hidden md:block">
                Use the arrow buttons to navigate the slides.
              </span>
            </p>
            <div className="absolute right-0 justify-end mr-8 -bottom-20 md:hidden">
              <span className="relative flex w-8 h-8">
                <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-8 h-8 border border-white rounded-full"></span>
              </span>
            </div>
          </motion.div>
        </div>
      </TransitionWrapper>
    </>
  )
}
