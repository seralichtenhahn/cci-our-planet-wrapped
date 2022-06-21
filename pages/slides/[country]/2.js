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

  const overshootDate = parseISO(overshoot_day)
  const overshootDayOfYear = getDayOfYear(overshootDate)

  const yearProgress =
    currentDayOfYear >= overshootDayOfYear
      ? 100
      : (currentDayOfYear / overshootDayOfYear) * 100

  return (
    <>
      <SlideNavigation />
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: `${yearProgress - 100}%` }}
        style={{ y }}
        transition={{ type: 'tween', duration: 3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 flex items-end w-full h-full bg-accent-red"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3 }}
          className="flex items-center justify-between w-full px-4 py-4 text-xl font-semibold text-white uppercase"
        >
          <p ref={percentageLabel}>0%</p>
          <p ref={monthLabel}>January</p>
        </motion.div>
      </motion.div>
      <TransitionWrapper delay={3}>
        <div className="relative flex flex-col w-full h-full gap-6 px-8 py-20 text-white">
          <h2 className="text-4xl font-black uppercase">
            {name}’s Overshoot Day {format(overshootDate, 'yyyy')} falls on{' '}
            {format(overshootDate, "EEEE, eo 'of' MMMM")}.
          </h2>
          <p>
            From this date onwards, {name} will be living on credit at the
            expense of future generations.
          </p>
        </div>
      </TransitionWrapper>
    </>
  )
}
