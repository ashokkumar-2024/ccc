'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'

const bgPatternSvg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><polygon points='45,3 87,45 45,87 3,45' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='0.6'/><circle cx='45' cy='45' r='9' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='1.5' fill='rgba(255,255,255,0.18)'/><circle cx='45' cy='3' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='45' cy='87' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='3' cy='45' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='87' cy='45' r='2' fill='rgba(255,255,255,0.12)'/></svg>`)

const offerings = [
  {
    name: 'Kalindi',
    subtitle: 'Intimate Ceremony Hall',
    description: 'An elegant, intimate space perfect for close-knit ceremonies and heartfelt celebrations. Kalindi offers a serene ambiance with refined décor to make your special moments truly personal.',
    capacity: 'Up to 150 guests',
    image: '/CCC/g1.webp',
  },
  {
    name: 'Maharajah',
    subtitle: 'Grand Banquet Pavilion',
    description: 'A majestic hall that exudes grandeur and opulence. Maharajah is designed for large-scale receptions, corporate galas, and lavish weddings that demand nothing but the best.',
    capacity: 'Up to 500 guests',
    image: '/CCC/Gallery.jpg',
  },
  {
    name: 'Akram',
    subtitle: 'Open Celebration Space',
    description: 'A vibrant, open-air celebration space flooded with natural light and fresh air. Akram is the ideal backdrop for festive gatherings, Sangeeth nights, and outdoor receptions.',
    capacity: 'Up to 300 guests',
    image: '/CCC/g5.webp',
  },
  {
    name: 'Tavani',
    subtitle: 'Library & Lounge Retreat',
    description: 'An intimate lounge setting for pre-event gatherings, cocktail evenings, or quiet corporate meetings. Tavani blends warmth and sophistication in equal measure.',
    capacity: 'Up to 80 guests',
    image: '/CCC/g6.webp',
  },
  {
    name: 'Jubilee',
    subtitle: 'Outdoor Marquee Lawn',
    description: 'Our sprawling open lawn draped under a marquee canopy — perfect for outdoor receptions, birthday celebrations, and community events with an open-sky feel.',
    capacity: 'Up to 400 guests',
    image: '/CCC/g7.jpg',
  },
  {
    name: 'Kailae',
    subtitle: 'Heritage Banquet Hall',
    description: 'Inspired by classical architecture, Kailae brings timeless heritage aesthetics to modern celebrations. A distinguished venue for traditional ceremonies and formal occasions.',
    capacity: 'Up to 250 guests',
    image: '/CCC/Gallery1.webp',
  },
  {
    name: 'The Signature Grounds',
    subtitle: 'The Complete Venue Experience',
    description: 'Book the entire Chaitanya Convention Centre for the grandest of celebrations. Seven spaces, one iconic destination — crafted for events that leave a lasting impression.',
    capacity: 'Up to 1000+ guests',
    image: '/CCC/g2.jpg',
  },
]

function GoldCorners() {
  return (
    <>
      <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-yellow-500/70" />
      <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-yellow-500/70" />
      <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-yellow-500/70" />
      <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-yellow-500/70" />
    </>
  )
}

export default function OfferingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative w-full mt-20" style={{ height: 'min(55vw, 520px)', minHeight: '260px' }}>
        <Image
          src="/CCC/Gallery.jpg"
          alt="Our Offerings"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <span className="text-white/60 text-xs tracking-[0.4em] uppercase mb-3">Chaitanya Convention Centre</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#bb9151] font-bold uppercase">Our Offerings</h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-white/60 text-xl">✤</span>
            <div className="h-px w-12 bg-white/40" />
          </div>
          <p className="text-white/70 text-sm sm:text-base mt-4 max-w-xl">
            Seven distinct spaces, each crafted to bring your vision to life.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 md:py-20" style={{ backgroundColor: '#cfb488' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#4f5f52' }}>Spaces & Venues</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-snug" style={{ color: '#4f5f52' }}>
            A Space for Every Celebration
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#4f5f52' }} />
            <span style={{ color: '#4f5f52' }}>✤</span>
            <div className="h-px w-10" style={{ backgroundColor: '#4f5f52' }} />
          </div>
          <p className="leading-relaxed text-sm sm:text-base text-white">
            From intimate gatherings to grand receptions, Chaitanya Convention Centre offers seven beautifully crafted spaces — each with its own character, charm, and capacity — all under one iconic roof in the heart of Rajajinagar, Bengaluru.
          </p>
        </div>
      </section>

      {/* Offerings Grid */}
      <section
        className="py-14 md:py-20"
        style={{
          backgroundColor: '#4F5F52',
          backgroundImage: `url("data:image/svg+xml,${bgPatternSvg}")`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-14 tracking-wide">
            EXPLORE OUR SPACES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {offerings.slice(0, 6).map((item) => (
              <OfferingCard key={item.name} item={item} />
            ))}
          </div>

          {/* Last card — full width featured */}
          <div className="mt-5 md:mt-6">
            <div className="relative bg-white overflow-hidden group">
              <GoldCorners />
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto min-h-[260px]">
                  <Image src={offerings[6].image} alt={offerings[6].name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium mb-2">The Complete Experience</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-1">{offerings[6].name}</h3>
                  <p className="text-primary/60 text-sm font-medium mb-4">{offerings[6].subtitle}</p>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">{offerings[6].description}</p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary text-xs">✤</span>
                    <span className="text-xs text-primary/70 font-medium tracking-wide">{offerings[6].capacity}</span>
                  </div>
                  <a href="/contact" className="self-start border border-primary text-primary px-8 py-2.5 text-xs tracking-widest uppercase font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}

function OfferingCard({ item }: { item: typeof offerings[0] }) {
  return (
    <div className="relative bg-white overflow-hidden group flex flex-col">
      <GoldCorners />
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-1">{item.name}</h3>
        <p className="text-primary/60 text-xs font-medium tracking-wide uppercase mb-3">{item.subtitle}</p>
        <p className="text-foreground/60 text-sm leading-relaxed flex-1">{item.description}</p>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-primary/10">
          <span className="text-primary text-xs">✤</span>
          <span className="text-xs text-primary/70 font-medium">{item.capacity}</span>
        </div>
      </div>
    </div>
  )
}
