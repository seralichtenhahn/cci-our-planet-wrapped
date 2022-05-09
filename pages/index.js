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
    <div>
      <svg ref={ref} />
    </div>
  )
}
