import React, { useEffect } from 'react'
import { format, getDayOfYear, parseISO, setDayOfYear } from 'date-fns'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

import Loader from '@/components/Loader'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function OvershootDay() {
  const { data } = useCountry()

  const percentageLabel = useRef(null)
  const monthLabel = useRef(null)
  const y = useMotionValue(0)

  const currentDayOfYear = getDayOfYear(new Date())

  useEffect(() => {
    const unsubscribe = y.onChange((value) => {
      const percentage = parseInt(value.replace('%', ''), 10) + 100

      if (percentageLabel.current) {
        percentageLabel.current.textContent = `${percentage}%`
      }

      if (monthLabel.current && data) {
        const overshootDayOfYear = getDayOfYear(parseISO(data.overshoot_day))
        const dayOfYear = (overshootDayOfYear / 100) * percentage

        monthLabel.current.textContent = format(
          setDayOfYear(new Date(), dayOfYear),
          'LLLL',
        )
      }
    })

    return () => unsubscribe()
  }, [y, data, currentDayOfYear])

  if (!data) {
    return <Loader />
  }

  const { overshoot_day, name } = data

  const overshootDayOfYear = getDayOfYear(parseISO(overshoot_day))

  const yearProgress =
    currentDayOfYear >= overshootDayOfYear
      ? 100
      : (currentDayOfYear / overshootDayOfYear) * 100

  return (
    <>
      <SlideNavigation currentPage={2} />
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: `${yearProgress - 100}%` }}
        style={{ y }}
        transition={{ type: 'tween', duration: 3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 flex items-end w-full h-full bg-accent-red"
      >
        <div className="flex items-center justify-between w-full px-4 py-4 text-xl font-semibold text-white uppercase">
          <p ref={percentageLabel}>0%</p>
          <p ref={monthLabel}>January</p>
        </div>
      </motion.div>
      <TransitionWrapper delay={2.5}>
        <div className="relative flex flex-col w-full h-full gap-6 px-8 py-20 text-white">
          <h2 className="text-4xl font-black uppercase">
            On {format(parseISO(overshoot_day), "EEEE, eo 'of' MMMM yyyy")}{' '}
            {name} {currentDayOfYear > overshootDayOfYear ? 'used' : 'will use'}{' '}
            all of the Earths resources for the year.
          </h2>
        </div>
      </TransitionWrapper>
    </>
  )
}
