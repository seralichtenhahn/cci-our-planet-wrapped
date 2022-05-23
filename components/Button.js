import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

export default function Button({ href, children, disabled = false }) {
  return (
    <Link href={disabled ? '/' : href}>
      <a
        className={clsx(
          'relative inline-block group focus:outline-none focus:ring',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-green-700 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-white uppercase border-2 border-current group-active:text-opacity-75">
          {children}
        </span>
      </a>
    </Link>
  )
}
