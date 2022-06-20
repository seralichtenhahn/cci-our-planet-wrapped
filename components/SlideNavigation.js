import React, { useRef, useState } from 'react'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import useSlideNavigation from '@/hooks/useSlideNavigation'

export default function SlideNavigation() {
  const router = useRouter()
  const [pause, setPause] = useState(true)
  let mousedownId = useRef()

  const { totalPages, basePath, currentPage, ...prevPage } = useSlideNavigation(
    {
      variant: 'prev',
    },
  )
  const nextPage = useSlideNavigation({ variant: 'next' })

  // mobile swipe navigation
  const toggleState = (action) => {
    setPause(action === 'pause')
  }

  const debouncePause = (e) => {
    mousedownId.current = setTimeout(() => {
      toggleState('pause')
    }, 200)
  }

  const mouseUp = (variant) => (e) => {
    mousedownId.current && clearTimeout(mousedownId.current)
    if (pause) {
      toggleState('play')
    } else {
      router.push(variant === 'next' ? nextPage.href : prevPage.href)
    }
  }

  return (
    <div className="absolute z-50 grid w-full h-full grid-cols-2 md:static md:block md:h-auto">
      <div
        className="md:hidden"
        title="Previous Page"
        onTouchStart={debouncePause}
        onTouchEnd={mouseUp('previous')}
        onMouseDown={debouncePause}
        onMouseUp={mouseUp('previous')}
      />
      <div
        className="md:hidden"
        title="Next Page"
        onTouchStart={debouncePause}
        onTouchEnd={mouseUp('next')}
        onMouseDown={debouncePause}
        onMouseUp={mouseUp('next')}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 flex justify-between w-full gap-2 px-3 py-3"
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
    </div>
  )
}
