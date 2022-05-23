import React from 'react'
import { Ring } from '@uiball/loaders'

export default function Loader({ color = '#fff' }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Ring size={40} lineWeight={5} speed={2} color={color} />
    </div>
  )
}
