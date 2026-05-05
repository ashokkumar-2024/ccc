'use client'

import Image from 'next/image'

const bgPatternSvg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'>
  <polygon points='45,3 87,45 45,87 3,45' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='0.6'/>
  <circle cx='45' cy='45' r='9' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/>
  <circle cx='45' cy='45' r='4' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/>
  <circle cx='45' cy='45' r='1.5' fill='rgba(255,255,255,0.18)'/>
  <line x1='45' y1='36' x2='45' y2='3' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <line x1='45' y1='54' x2='45' y2='87' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <line x1='36' y1='45' x2='3' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <line x1='54' y1='45' x2='87' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <circle cx='45' cy='3' r='2' fill='rgba(255,255,255,0.12)'/>
  <circle cx='45' cy='87' r='2' fill='rgba(255,255,255,0.12)'/>
  <circle cx='3' cy='45' r='2' fill='rgba(255,255,255,0.12)'/>
  <circle cx='87' cy='45' r='2' fill='rgba(255,255,255,0.12)'/>
</svg>`)

export default function StoryContent() {
  return (
    <div>
      {/* Section 2 — Every Moment Is An Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[560px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/CCC/g4.jpg" alt="Every Moment" fill className="object-cover" />
            </div>

            {/* Text */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">Our Philosophy</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif text-primary leading-snug">
              Every Moment Is An Experience!
              </h2>
              <div className="flex items-center gap-3 mt-5 mb-6">
                <div className="h-px w-10 bg-primary/40" />
                <span className="text-primary text-lg opacity-50">✤</span>
                <div className="h-px w-10 bg-primary/40" />
              </div>
              <p className="text-foreground/60 leading-relaxed text-base mb-4 text-justify">
                <strong className="text-primary font-semibold">Chaitanya</strong>{' '}
                <span className="italic text-foreground/40">(Sanskrit: चैतन्य)</span> refers to{' '}
                <em>awareness</em>, <em>consciousness</em>, <em>Conscious Self</em>, <em>intelligence</em>, or{' '}
                <em>Pure Consciousness</em>. It also means energy — the energy that brings you closer to your magical moments.
              </p>
              <p className="text-foreground/60 leading-relaxed text-base mb-8 text-justify">
                We at <strong className="text-primary font-semibold">CCC (Chaitanya Convention Centre)</strong> believe every event should be conducted with pure consciousness that will bring happiness and make each of your moments truly memorable.
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-3.5 bg-primary text-white text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — About Us */}
      <section className="py-24" style={{
        backgroundColor: '#4F5F52',
        backgroundImage: `url("data:image/svg+xml,${bgPatternSvg}")`,
        backgroundRepeat: 'repeat',
      }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#FAF8F399' }}>Who We Are</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-serif leading-snug uppercase" style={{ color: '#FAF8F3' }}>
                About Us
              </h2>
              <div className="flex items-center gap-3 mt-5 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: '#FAF8F340' }} />
                <span className="text-lg" style={{ color: '#FAF8F360' }}>✤</span>
                <div className="h-px w-10" style={{ backgroundColor: '#FAF8F340' }} />
              </div>
              <p className="leading-relaxed text-base mb-4" style={{ color: '#FAF8F3cc' }}>
                The <strong className="font-semibold" style={{ color: '#FAF8F3' }}>Chaitanya Convention Centre</strong>, nestled in the heart of West of Chord Road, Rajajinagar, Bengaluru, embodies the epitome of luxury for your most cherished celebrations.
              </p>
              <p className="leading-relaxed text-base mb-8" style={{ color: '#FAF8F3cc' }}>
                With its royal interiors and meticulous attention to detail, we guarantee your special day will unfold seamlessly — allowing you to revel in the festivities worry-free. Every aspect is tailored to meet your desires, ensuring an experience as magnificent as the venue itself.
              </p>
              <a
                href="/celebrations"
                className="inline-block px-10 py-3.5 text-sm font-semibold tracking-[0.2em] uppercase transition-colors"
                style={{ backgroundColor: '#cfb488', color: '#4F5F52' }}
              >
                Book Now
              </a>
            </div>

            {/* Image */}
            <div className="relative h-[560px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/CCC/g20.webp" alt="About Us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
