'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  '/CCC/1.png',
  '/CCC/2.png',
  '/CCC/3.png',
  '/CCC/4.png',
  '/CCC/5.png',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 4000)
    return () => clearInterval(timer)
  }, [current])

  function goTo(index: number) {
    if (animating || index === current) return
    setPrev(current)
    setCurrent(index)
    setAnimating(true)
    setTimeout(() => { setPrev(null); setAnimating(false) }, 700)
  }

  return (
    <div className="w-full relative overflow-hidden" style={{ height: '70vw', maxHeight: '95vh' }}>
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : i === prev ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Chaitanya Convention Centre slide ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === current ? '#bb9151' : 'rgba(255,255,255,0.6)',
            }}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
        style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
        style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
