import React from 'react'
import { Ring } from '@uiball/loaders'
import clsx from 'clsx'

export default function Loader({ color = '#fff', background = null }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center w-full h-full',
        background,
      )}
    >
      <Ring size={40} lineWeight={5} speed={2} color={color} />
    </div>
  )
}
