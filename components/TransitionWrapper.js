import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -80 },
}

export default function TransitionWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'easeInOut', duration: 0.5, delay }} // Set the transition to linear
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}
