import * as d3 from 'd3'

import { useEffect, useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append('circle').attr('cx', 150).attr('cy', 70).attr('r', 50)

    return () => {
      svgElement.select('circle').remove()
    }
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-r from-cyan-200 to-cyan-400 p-4">
      <h1 className="font-black text-6xl uppercase leading-none text-transparent bg-clip-text text-center bg-gradient-to-r from-green-500 to-green-700 drop-shadow-xl">
        Our Planet{' '}
        <span className="bg-clip-padding inline-block text-transparent">
          Wrapped
        </span>
      </h1>
      <svg ref={ref} />
    </div>
  )
}
