'use client'

import Image from 'next/image'

const row1 = [
  '/CCC/g10.webp',
  '/CCC/g11.jpg',
  '/CCC/g12.webp',
]

const row2 = [
  '/CCC/g13.webp',
  '/CCC/g15.jpg',
  '/CCC/g15.webp',
]

export default function Gallery() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-8 md:mb-10 px-4">
        <div className="flex justify-center opacity-60 mb-3">
          <span className="text-primary text-2xl md:text-3xl">✤</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary uppercase mb-3">
          A Glimpse of CHAITANYA
        </h2>
        <p className="text-foreground/60 text-sm sm:text-base md:text-lg">
          Where every corner tells a story of luxury, nature, and unforgettable moments.
        </p>
      </div>

      {/* Row 1 - scroll left */}
      <div className="relative flex overflow-hidden mb-3 md:mb-4">
        <div className="flex animate-scroll-left gap-3 md:gap-4">
          {[...row1, ...row1].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[480px] h-52 sm:h-64 md:h-80 rounded-xl overflow-hidden">
              <Image src={src} alt="" width={480} height={320} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll-right gap-3 md:gap-4">
          {[...row2, ...row2].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[480px] h-52 sm:h-64 md:h-80 rounded-xl overflow-hidden">
              <Image src={src} alt="" width={480} height={320} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
