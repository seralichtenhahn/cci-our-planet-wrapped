import * as d3 from 'd3'

import React from 'react'
import { motion } from 'framer-motion'

export default function BarChart({ width, height, data }) {
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
      {xScale.ticks(5).map((year) => (
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
      {yScale.ticks().map((max) => (
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
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Circles */}
      {data.map((d, i) => (
        <motion.circle
          key={d.year}
          initial={{ r: 0 }}
          animate={{ r: 5 }}
          transition={{ duration: 0.3, type: 'spring', delay: i * 0.02 }}
          cx={xScale(d.year)}
          cy={yScale(d.value)}
          fill="currentColor"
          stroke="#FF6363"
          strokeWidth={2}
        />
      ))}
    </svg>
  )
}
