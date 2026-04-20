"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InteractiveGridPatternProps {
  width?: number
  height?: number
  squares?: [number, number]
  className?: string
  squaresClassName?: string
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [20, 20],
  className,
  squaresClassName,
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [hoveredSquares, setHoveredSquares] = useState<Set<number>>(new Set())
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const col = Math.floor(x / width)
      const row = Math.floor(y / height)

      const newHovered = new Set<number>()
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const r = row + dr
          const c = col + dc
          if (r >= 0 && r < vertical && c >= 0 && c < horizontal) {
            newHovered.add(r * horizontal + c)
          }
        }
      }
      setHoveredSquares(newHovered)
    }

    const handleMouseLeave = () => setHoveredSquares(new Set())

    svg.addEventListener("mousemove", handleMouseMove)
    svg.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      svg.removeEventListener("mousemove", handleMouseMove)
      svg.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [width, height, horizontal, vertical])

  return (
    <svg
      ref={svgRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: horizontal * vertical }).map((_, i) => {
        const col = i % horizontal
        const row = Math.floor(i / horizontal)
        return (
          <rect
            key={i}
            x={col * width}
            y={row * height}
            width={width}
            height={height}
            className={cn(
              "stroke-violet-500/20 transition-all duration-300",
              hoveredSquares.has(i)
                ? "fill-violet-500/25 duration-100"
                : "fill-transparent duration-700",
              squaresClassName
            )}
            strokeWidth={0.5}
          />
        )
      })}
    </svg>
  )
}
