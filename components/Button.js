import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

export default function Button({
  href,
  children,
  disabled = false,
  variant = 'primary',
  className,
  ...props
}) {
  const Component = href ? 'a' : 'button'

  const element = (
    <Component
      className={clsx(
        'relative inline-block group focus:outline-none focus:ring',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 group-hover:translate-y-0 group-hover:translate-x-0',
          variant === 'primary' && ' bg-green-700',
          variant === 'secondary' && ' bg-accent-red',
        )}
      ></span>

      <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-white uppercase border-2 border-current group-active:text-opacity-75">
        {children}
      </span>
    </Component>
  )

  return Component === 'a' ? (
    <Link href={disabled ? '/' : href}>{element}</Link>
  ) : (
    element
  )
}
