'use client'

import Image from 'next/image'

const rooms = [
  '/CCC/r1.jpg',
  '/CCC/r2.jpg',
  '/CCC/r3.jpg',
  '/CCC/r4.jpg',
  '/CCC/r5.webp',
  '/CCC/r6.webp',
  '/CCC/r7.jpg',
]

export default function RoomsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center opacity-60 mb-3">
            <span className="text-primary text-3xl">✤</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary uppercase mb-3">
            Our Rooms
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Luxurious retreats nestled in nature — designed for rest, romance, and rejuvenation.
          </p>
        </div>

        {/* Row 1 - 3 equal square images */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {rooms.slice(0, 3).map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={src} alt="Room" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Row 2 - 4 equal square images */}
        <div className="grid grid-cols-4 gap-4">
          {rooms.slice(3).map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={src} alt="Room" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
