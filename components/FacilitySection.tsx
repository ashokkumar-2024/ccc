'use client'

import Image from 'next/image'

const images = [
  { src: '/CCC/f1.jpg', tall: true },
  { src: '/CCC/f1.webp', tall: false },
  { src: '/CCC/f2.webp', tall: false },
  { src: '/CCC/Facility.webp', tall: true },
  { src: '/CCC/facility1.webp', tall: false },
]

export default function FacilitySection() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 auto-rows-[260px]">
          {/* Large left image */}
          <div className="row-span-2 rounded-2xl overflow-hidden">
            <Image src="/CCC/f1.jpg" alt="Facility" width={600} height={540} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Top middle */}
          <div className="rounded-2xl overflow-hidden">
            <Image src="/CCC/f1.webp" alt="Facility" width={600} height={260} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Top right */}
          <div className="rounded-2xl overflow-hidden">
            <Image src="/CCC/f2.webp" alt="Facility" width={600} height={260} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Bottom middle */}
          <div className="rounded-2xl overflow-hidden">
            <Image src="/CCC/Facility.webp" alt="Facility" width={600} height={260} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Bottom right */}
          <div className="rounded-2xl overflow-hidden">
            <Image src="/CCC/facility1.webp" alt="Facility" width={600} height={260} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
