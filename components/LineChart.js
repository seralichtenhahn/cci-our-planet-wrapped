import * as d3 from 'd3'

import React from 'react'
import { motion } from 'framer-motion'

export default function LineChart({
  width,
  height,
  data,
  bgColor = '#FF6363',
  xTicks = 5,
  yTicks = 5,
  showCircles = true,
  pathGradient = [],
  title = '',
}) {
  let margin = {
    top: 10,
    right: 16,
    bottom: 48,
    left: 32,
  }

  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d.year)))
    .range([margin.left, width - margin.right])

  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d.value)))
    .range([height - margin.bottom, margin.top])

  let line = d3
    .line()
    .curve(d3.curveCatmullRom)
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.value))
  let d = line(data)

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      {!!title && (
        <text
          textAnchor="middle"
          fill="currentColor"
          transform={`translate(${width / 2}, ${height - margin.bottom / 3})`}
          className="text-[10px]"
        >
          {title}
        </text>
      )}
      {xScale.ticks(xTicks).map((year) => (
        <g
          key={year}
          className="text-white/80"
          transform={`translate(${xScale(year)},${height - margin.bottom})`}
        >
          <text textAnchor="middle" fill="currentColor" className="text-[10px]">
            {year}
          </text>
        </g>
      ))}
      {yScale.ticks(yTicks).map((max) => (
        <g
          key={max}
          className="text-white/80"
          transform={`translate(0,${yScale(max)})`}
        >
          <line
            x1={margin.left}
            x2={width - margin.right}
            stroke="currentColor"
            strokeDasharray="1,3"
          />
          <text
            alignmentBaseline="middle"
            className="text-[10px]"
            fill="currentColor"
          >
            {max}
          </text>
        </g>
      ))}

      {/* Line */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, type: 'spring', delay: 0.6 }}
        d={d}
        fill="none"
        strokeWidth="2"
        stroke={pathGradient.length ? 'url(#gradient)' : 'currentColor'}
      />

      {/* Circles */}
      {showCircles &&
        data.map((d, i) => (
          <motion.circle
            key={d.year}
            initial={{ r: 0 }}
            animate={{ r: 5 }}
            transition={{ duration: 0.3, type: 'spring', delay: i * 0.02 }}
            cx={xScale(d.year)}
            cy={yScale(d.value)}
            fill="currentColor"
            stroke={bgColor}
            strokeWidth={2}
          />
        ))}
      {pathGradient.length > 0 && (
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {pathGradient.map((color, i) => (
              <stop
                key={i}
                offset={`${(i / (pathGradient.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
      )}
    </svg>
  )
}
