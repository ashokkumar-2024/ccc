'use client'

import Image from 'next/image'
import Link from 'next/link'

const bgPatternSvg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><polygon points='45,3 87,45 45,87 3,45' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='0.6'/><circle cx='45' cy='45' r='9' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='4' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='1.5' fill='rgba(255,255,255,0.18)'/><line x1='45' y1='36' x2='45' y2='3' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='45' y1='54' x2='45' y2='87' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='36' y1='45' x2='3' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='54' y1='45' x2='87' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><circle cx='45' cy='3' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='45' cy='87' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='3' cy='45' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='87' cy='45' r='2' fill='rgba(255,255,255,0.12)'/></svg>`)

export default function SignatureGrounds() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundColor: '#4F5F52',
        backgroundImage: `url("data:image/svg+xml,${bgPatternSvg}")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white relative overflow-hidden">
          {/* Gold corner accents */}
          <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-500 z-10" />
          <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-yellow-500 z-10" />
          <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-yellow-500 z-10" />
          <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-500 z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — Image */}
            <div className="relative h-72 sm:h-80 md:h-auto min-h-[320px]">
              <Image
                src="/CCC/f1.jpg"
                alt="The Signature Grounds"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right — Content */}
            <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-center">
              <span
                className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
                style={{ color: '#bb9151' }}
              >
                The Complete Experience
              </span>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 leading-tight"
                style={{ color: '#bb9151' }}
              >
                The Signature Grounds
              </h2>

              <p
                className="text-base font-serif italic mb-6"
                style={{ color: '#bb9151' }}
              >
                The Complete Venue Experience
              </p>

              <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-6">
                Book the entire Chaitanya Convention Centre for the grandest of celebrations. Seven spaces, one iconic destination — crafted for events that leave a lasting impression.
              </p>

              <div className="flex items-center gap-2 mb-8">
                <span style={{ color: '#bb9151' }}>✤</span>
                <span className="text-sm font-medium" style={{ color: '#bb9151' }}>
                  Up to 1000+ guests
                </span>
              </div>

              <Link
                href="/contact"
                className="self-start border-2 px-10 py-3 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-white"
                style={{ borderColor: '#bb9151', color: '#bb9151' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#bb9151'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#bb9151'
                }}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
