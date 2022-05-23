import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function SlideNavigation({ currentPage }) {
  const router = useRouter()

  const pages = 7
  const basePath = `/slides/${router.query.country}/`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-0 left-0 flex justify-between w-full gap-2 px-3 py-2"
    >
      {Array.from({ length: pages }).map((_, i) => (
        <Link key={i} href={i ? `${basePath}${i}` : basePath}>
          <a
            className={clsx(
              'block flex-1 h-1 rounded transform transition-transform hover:scale-y-[2]',
              currentPage > i ? 'bg-white' : 'bg-white/30',
            )}
          />
        </Link>
      ))}
    </motion.div>
  )
}
