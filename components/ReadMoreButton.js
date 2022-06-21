import { LightBulbIcon } from '@heroicons/react/outline'
import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function ReadMoreButton({
  subTitle = 'Find out more',
  href,
  children,
  isFloating = false,
}) {
  return (
    <div
      className={clsx(
        'flex justify-center w-full',
        isFloating && 'absolute bottom-4',
      )}
    >
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="relative inline-block text-sm font-medium text-primary-dark group focus:outline-none focus:ring"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="absolute inset-0 border border-white rounded-full"></span>
        <span className="block px-12 py-2 transition-transform -translate-x-1 -translate-y-1 bg-white border border-current rounded-full group-hover:-translate-x-0 group-hover:-translate-y-0">
          {!!subTitle && (
            <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase">
              <LightBulbIcon className="w-4 h-4 text-secondary-yellow" />
              {subTitle}
              <LightBulbIcon className="w-4 h-4 text-secondary-yellow" />
            </span>
          )}
          {children}
        </span>
      </motion.a>
    </div>
  )
}
