'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/CCC/image (8).png"
        alt="Chaitanya Convention Centre"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  )
}
