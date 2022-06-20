import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import useSlideNavigation from '@/hooks/useSlideNavigation'

export default function NextPrevLink({ variant }) {
  const { href, isDisabled } = useSlideNavigation({ variant })

  return (
    <Link href={href}>
      <a
        className={clsx(
          'hidden w-8 h-8 p-1 bg-white rounded-full shadow-md md:block',
          isDisabled && 'opacity-50 cursor-not-allowed select-none',
        )}
      >
        {variant === 'next' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </a>
    </Link>
  )
}
