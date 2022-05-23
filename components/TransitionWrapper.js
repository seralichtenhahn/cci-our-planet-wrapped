import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function TransitionWrapper({
  children,
  delay = 0,
  background = 'bg-primary-dark',
}) {
  return (
    <div className={clsx('w-full h-full', background)}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'easeIn', duration: 0.5, delay }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
