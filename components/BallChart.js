import * as d3 from 'd3'

import React, { useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

export default function BallChart({ width, height, data }) {
  const ref = useRef(null)

  useEffect(() => {
    const svg = d3.select(ref.current)
    const r = Math.min(width, height) / 4 - 10

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', r)
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .style('fill', 'url(#a)')
      .attr('stroke', '#fff')
      .attr('class', 'cursor-grab')
      .style('stroke-width', 1)
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended),
      )

    const simulation = d3
      .forceSimulation()
      .force(
        'center',
        d3
          .forceCenter()
          .x(width / 2)
          .y(height / 2),
      )
      .force('charge', d3.forceManyBody().strength(1))
      .force(
        'collide',
        d3
          .forceCollide()
          .strength(0.1)
          .radius(r + 5)
          .iterations(1),
      )

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.03).restart()
      d.fx = d.x
      d.fy = d.y
    }
    function dragged(event, d) {
      d.fx = event.x
      d.fy = event.y
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0.03)
      d.fx = null
      d.fy = null
    }

    simulation.nodes(data).on('tick', function (d) {
      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
    })

    return () => {
      node.remove()
    }
  }, [width, height, data])

  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <radialGradient
          id="a"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(-0.5 -0.5)"
        >
          <stop offset="80%" stopColor="#039712" />
          <stop offset="10%" stopColor="#035397" />
        </radialGradient>
      </defs>
    </svg>
  )
}
