'use client'

import React from 'react'
import Image from 'next/image'
import EnquiryModal from '@/components/EnquiryModal'

const KalindiIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <path d="M10 46 L10 26 Q10 14 28 12 Q46 14 46 26 L46 46" />
    <line x1="6" y1="46" x2="50" y2="46" />
    <path d="M20 46 L20 34 Q20 28 28 28 Q36 28 36 34 L36 46" />
    <path d="M28 12 L28 7" />
    <path d="M24 7 Q28 4 32 7" />
    <line x1="14" y1="32" x2="18" y2="32" />
    <line x1="38" y1="32" x2="42" y2="32" />
  </svg>
)

const MaharajahIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <line x1="6" y1="46" x2="50" y2="46" />
    <line x1="10" y1="42" x2="10" y2="22" />
    <line x1="18" y1="42" x2="18" y2="22" />
    <line x1="28" y1="42" x2="28" y2="18" />
    <line x1="38" y1="42" x2="38" y2="22" />
    <line x1="46" y1="42" x2="46" y2="22" />
    <path d="M6 22 Q28 8 50 22" />
    <line x1="6" y1="42" x2="50" y2="42" />
    <path d="M28 18 L28 12" />
    <path d="M24 10 Q28 7 32 10 Q28 13 24 10Z" fill="currentColor" stroke="none" />
  </svg>
)

const AkramIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <path d="M28 8 L31 20 L44 20 L34 28 L37 40 L28 33 L19 40 L22 28 L12 20 L25 20 Z" />
    <circle cx="28" cy="28" r="6" />
    <line x1="28" y1="4" x2="28" y2="7" />
    <line x1="44" y1="10" x2="42" y2="12" />
    <line x1="12" y1="10" x2="14" y2="12" />
    <line x1="50" y1="28" x2="47" y2="28" />
    <line x1="6" y1="28" x2="9" y2="28" />
  </svg>
)

const TavaniIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <path d="M12 46 L12 12 Q12 10 14 10 L30 10 Q38 10 38 18 L38 46" />
    <path d="M38 18 Q38 10 46 10 Q48 10 48 12 L48 46" />
    <line x1="8" y1="46" x2="52" y2="46" />
    <line x1="16" y1="20" x2="34" y2="20" />
    <line x1="16" y1="26" x2="34" y2="26" />
    <line x1="16" y1="32" x2="34" y2="32" />
    <line x1="16" y1="38" x2="28" y2="38" />
  </svg>
)

const JubileeIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <path d="M6 30 Q6 18 28 14 Q50 18 50 30 L50 46 L6 46 Z" />
    <line x1="28" y1="14" x2="28" y2="8" />
    <path d="M25 8 L28 5 L31 8" />
    <line x1="6" y1="46" x2="50" y2="46" />
    <line x1="6" y1="30" x2="50" y2="30" />
    <line x1="17" y1="30" x2="17" y2="46" />
    <line x1="28" y1="30" x2="28" y2="46" />
    <line x1="39" y1="30" x2="39" y2="46" />
    <path d="M6 30 Q6 24 28 22 Q50 24 50 30" />
  </svg>
)

const KailaeIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <rect x="8" y="42" width="40" height="4" rx="1" />
    <rect x="6" y="20" width="44" height="4" rx="1" />
    <line x1="14" y1="24" x2="14" y2="42" />
    <line x1="22" y1="24" x2="22" y2="42" />
    <line x1="34" y1="24" x2="34" y2="42" />
    <line x1="42" y1="24" x2="42" y2="42" />
    <path d="M8 20 L28 10 L48 20" />
    <circle cx="28" cy="10" r="2" fill="currentColor" stroke="none" />
  </svg>
)

const VenueIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto">
    <path d="M28 8 C20 8 14 14 14 22 C14 34 28 48 28 48 C28 48 42 34 42 22 C42 14 36 8 28 8Z" />
    <circle cx="28" cy="22" r="6" />
    <circle cx="28" cy="22" r="2.5" fill="currentColor" stroke="none" />
  </svg>
)

const services: { Icon: () => React.ReactElement; name: string; desc: string }[] = [
  { Icon: KalindiIcon,   name: 'Wedding Ceremony',  desc: 'Begin your forever in timeless elegance' },
  { Icon: MaharajahIcon, name: 'Wedding Reception', desc: 'Celebrate love in grand style' },
  { Icon: AkramIcon,     name: 'Sangeeth',          desc: 'Dance, music & joyful celebrations' },
  { Icon: TavaniIcon,    name: 'Engagement',        desc: 'A beautiful start to your journey' },
  { Icon: JubileeIcon,   name: 'Baby Shower',       desc: 'Welcome the little one with love' },
  { Icon: KailaeIcon,    name: 'Naming Ceremony',   desc: 'A cherished milestone, beautifully marked' },
  { Icon: VenueIcon,     name: 'Upanayanam',        desc: 'Sacred traditions in a serene setting' },
  { Icon: KalindiIcon,   name: 'Corporate Events',  desc: 'Professional spaces for impactful gatherings' },
  { Icon: MaharajahIcon, name: 'Trade Shows',       desc: 'Showcase your brand with confidence' },
  { Icon: AkramIcon,     name: 'Music Concerts',    desc: 'Electrifying performances, unforgettable nights' },
]

export default function ServicesGrid() {
  const topRow = services.slice(0, 4)
  const bottomRow = services.slice(4)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Image src="/topLeft.png" alt="" width={200} height={200} className="absolute top-0 left-0 pointer-events-none opacity-40" />
      <Image src="/topRight.png" alt="" width={200} height={200} className="absolute top-0 right-0 pointer-events-none opacity-40" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 space-y-3">
          <div className="flex justify-center">
            <span className="text-primary text-3xl opacity-70">✤</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary tracking-wide">
            TAILORED FOR EVERY OCCASION
          </h2>
          <p className="text-foreground/50 text-sm sm:text-base max-w-xl mx-auto">
            From intimate ceremonies to grand celebrations — we make every moment extraordinary.
          </p>
        </div>

        {/* Top row — 2 on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-3 sm:mb-5">
          {topRow.map(({ Icon, name, desc }) => (
            <ServiceCard key={name} Icon={Icon} name={name} desc={desc} />
          ))}
        </div>

        {/* Bottom row — 2 on mobile, 3 centered on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:max-w-[75%] lg:mx-auto">
          {bottomRow.map(({ Icon, name, desc }) => (
            <ServiceCard key={name} Icon={Icon} name={name} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ Icon, name, desc }: { Icon: () => React.ReactElement; name: string; desc: string }) {
  return (
    <div className="group bg-white border border-primary/15 hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer p-4 sm:p-6 md:p-8 text-center flex flex-col items-center gap-3 sm:gap-4 relative overflow-hidden">
      {/* Floral PNG — top-left: always subtle, full on hover */}
      <Image
        src="/topLeft.png"
        alt=""
        width={90}
        height={90}
        className="absolute -top-2 -left-2 pointer-events-none opacity-20 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
      />
      {/* Floral PNG — bottom-right: always subtle, full on hover */}
      <Image
        src="/topRight.png"
        alt=""
        width={90}
        height={90}
        className="absolute -bottom-2 -right-2 pointer-events-none opacity-20 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 rotate-180"
      />

      {/* Gold corner accents */}
      <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>

      <div className="w-8 h-px bg-primary/30 group-hover:w-14 transition-all duration-300" />

      <p className="text-primary font-bold text-base tracking-widest uppercase">{name}</p>
      <p className="text-foreground/50 text-xs leading-relaxed">{desc}</p>

      <EnquiryModal
        trigger={(openModal) => (
          <button
            onClick={openModal}
            className="mt-1 text-xs tracking-widest uppercase font-semibold border px-4 py-2 transition-all duration-300"
            style={{ borderColor: '#bb9151', color: '#bb9151' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#bb9151'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#bb9151' }}
          >
            Enquire Now
          </button>
        )}
      />
    </div>
  )
}
