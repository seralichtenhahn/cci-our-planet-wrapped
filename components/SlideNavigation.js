import React, { useEffect } from 'react'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import useSlideNavigation from '@/hooks/useSlideNavigation'
import { useSwipeable } from 'react-swipeable'

export default function SlideNavigation() {
  const router = useRouter()

  const { totalPages, basePath, currentPage, ...prevPage } = useSlideNavigation(
    {
      variant: 'prev',
    },
  )
  const nextPage = useSlideNavigation({ variant: 'next' })

  // mobile swipe navigation
  const { ref } = useSwipeable({
    onSwipedLeft(e) {
      router.push(nextPage.href)
    },
    onSwipedRight(e) {
      router.push(prevPage.href)
    },
    touchEventOptions: {
      once: true,
    },
  })

  useEffect(() => {
    ref(document)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-0 left-0 z-50 flex justify-between w-full gap-2 px-3 py-3"
    >
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link key={i} href={i ? `${basePath}${i}` : basePath}>
          <a
            className={clsx(
              'block flex-1 h-1 rounded transform transition-transform hover:scale-y-[2]',
              currentPage >= i ? 'bg-white' : 'bg-white/30',
            )}
          >
            <span className="sr-only">{`Go to page ${i}`}</span>
          </a>
        </Link>
      ))}
    </motion.div>
  )
}
