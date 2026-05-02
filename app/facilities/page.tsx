'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'

const occasions = [
  'Weddings', 'Receptions', 'Birthday Parties',
  'Stage Programs', 'Concerts', 'Conferences / Seminars',
]

const facilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: 'Location',
    desc: 'Located in the prime location at the West of Chord Road, Rajajinagar',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Facilities',
    desc: 'Room for customization of events with state-of-the-art facilities suiting your preferences',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="7" r="4"/>
        <path d="M2 20s2-4 10-4 10 4 10 4"/>
        <path d="M17 3.5a2.5 2.5 0 010 5"/>
        <path d="M22 20s-1.5-3-5-3.5"/>
      </svg>
    ),
    title: 'CCTV',
    desc: '24 hours CCTV Surveillance for complete security and peace of mind',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9.5 2h5l1 4H8.5l1-4z"/>
        <path d="M3 10h18v2a9 9 0 01-18 0v-2z"/>
        <path d="M12 6v4"/>
        <path d="M8 10V8m8 2V8"/>
      </svg>
    ),
    title: 'A/C',
    desc: 'Centralized A/C for the Main Hall & Non-A/C dining hall',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="14" width="20" height="7" rx="1"/>
        <path d="M6 14V9a6 6 0 0112 0v5"/>
        <line x1="12" y1="3" x2="12" y2="5"/>
        <line x1="7" y1="5" x2="8.5" y2="6.5"/>
        <line x1="17" y1="5" x2="15.5" y2="6.5"/>
      </svg>
    ),
    title: 'Colossal Stage',
    desc: 'A central stage with an A/C Green Room on both sides of the stage',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Power',
    desc: 'Uninterrupted power supply with multiple generators',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 22V8l9-6 9 6v14"/>
        <path d="M9 22V12h6v10"/>
        <rect x="10" y="3" width="4" height="4" rx="0.5"/>
      </svg>
    ),
    title: 'Rooms',
    desc: '15 Spacious rooms with A/C and attached bathrooms (geysers included)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
      </svg>
    ),
    title: 'Budget Friendly',
    desc: 'Affordable prices with the best-curated packages for every occasion',
  },
]

const inclusions = [
  'Plush Banquet Hall with centralised air conditioning',
  'Seating capacity of 500 chairs (cushion chairs with covers included)',
  'Dining Hall with seating capacity of 300 and 550 for buffet',
  'Modern commercial kitchen with 8 burners for 2000 people',
  'Valet Parking up to 60 Cars (well experienced drivers)',
  '24 Hours Water Supply for general and cooking purposes',
  '15 Deluxe rooms (13+2) inclusive of Bride & Groom rooms with A/C & geysers',
  'Generator backup for convention center purposes',
  'One Brass Mantapa and 10 Jamkhana',
  'Nadhaswaram included',
  'Professional sound system included',
  'Housekeeping & garbage clearing charges',
]

const additionalServices = [
  'Five (5) cooking gas cylinders included',
]

const terms = [
  'Booking is against FULL PAYMENT (100%)',
  'Booking is NOT TRANSFERABLE',
  'In case of any cancellation, the AMOUNT WILL NOT BE REFUNDED',
  'Security for the final property to be arranged by the applicant',
  'The applicant should arrange Locks and Keys for the Rooms',
  'Prescribed Deposit amount MUST be paid four days prior to occupation',
  'Prohibited: Non-Veg Food | Liquor & Cards | Gambling | Crackers & Explosives',
  'Decoration on the Dias and at the entrance is permitted. Ramps are prohibited',
  'Convention Centre property SHOULD NOT be taken outside premises',
  'Outside decoration should not affect Traffic on the road',
  'Repair charges for any damages to be borne by the applicant',
  'Accounts must be finalized while vacating the premises',
  'Use of plastic paper, spoons, and plates are PROHIBITED (BBMP rules)',
  'Prior permission required for Drone Photography',
  'Flower Decorations in-house only — outside decorators not allowed',
  'In case of disputes, only Bengaluru Courts will have Jurisdiction',
]

const galleryImages = [
  '/CCC/Facility.webp',
  '/CCC/g2.jpg',
  '/CCC/g19.webp',
  '/CCC/f2.webp',
  '/CCC/f1.jpg',
  '/CCC/facility1.webp',
]

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative w-full mt-20" style={{ height: 'min(55vw, 520px)', minHeight: '260px' }}>
        <Image src="/CCC/Facility.webp" alt="Facilities" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <span className="text-white/60 text-xs tracking-[0.4em] uppercase mb-3">Chaitanya Convention Centre</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#bb9151] font-bold uppercase">Our Facilities</h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-white/60 text-xl">✤</span>
            <div className="h-px w-12 bg-white/40" />
          </div>
        </div>
      </div>

      {/* Intro + Occasions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">Perfect For</span>
              <h2 className="mt-3 text-4xl font-serif text-primary font-bold leading-snug">
                Tailored For Every Occasion
              </h2>
              <div className="flex items-center gap-3 mt-4 mb-6">
                <div className="h-px w-10 bg-primary/40" />
                <span className="text-primary opacity-50">✤</span>
                <div className="h-px w-10 bg-primary/40" />
              </div>
              <p className="text-foreground/60 leading-relaxed text-base mb-8 text-justify">
                Chaitanya Convention Centre is perfect for Weddings, Receptions, Birthday Parties, Meetings, Seminars, Stage Programs, and Concerts. We guarantee all the facilities needed for the success and beauty of your event.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {occasions.map((o) => (
                  <div key={o} className="flex items-center gap-2">
                    <span className="text-primary text-sm">✤</span>
                    <span className="text-foreground/70 text-sm font-medium">{o}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/CCC/g2.jpg" alt="Occasions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Facilities Grid */}
      <section className="py-20" style={{
        backgroundColor: '#4F5F52',
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><polygon points='45,3 87,45 45,87 3,45' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='0.6'/><circle cx='45' cy='45' r='9' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='4' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='1.5' fill='rgba(255,255,255,0.18)'/><line x1='45' y1='36' x2='45' y2='3' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='45' y1='54' x2='45' y2='87' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='36' y1='45' x2='3' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='54' y1='45' x2='87' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><circle cx='45' cy='3' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='45' cy='87' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='3' cy='45' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='87' cy='45' r='2' fill='rgba(255,255,255,0.12)'/></svg>`)}") `,
        backgroundRepeat: 'repeat',
      }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>Why Choose Us</span>
            <h2 className="mt-3 text-4xl font-serif font-bold uppercase" style={{ color: '#ffffff' }}>World-Class Amenities</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-10" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>✤</span>
              <div className="h-px w-10" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
            </div>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
              We believe we are the best convention centre with a one-stop solution for all special gatherings and corporate events, located in the heart of the city.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{f.title}</h3>
                <p className="text-foreground/55 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">A Glimpse</span>
            <h2 className="mt-3 text-4xl font-serif text-primary font-bold uppercase">Venue Gallery</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-10 bg-primary/40" />
              <span className="text-primary opacity-50">✤</span>
              <div className="h-px w-10 bg-primary/40" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 auto-rows-[220px]">
            <div className="row-span-2 relative rounded-2xl overflow-hidden">
              <Image src={galleryImages[0]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image src={galleryImages[1]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image src={galleryImages[2]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image src={galleryImages[3]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="col-span-1 relative rounded-2xl overflow-hidden">
              <Image src={galleryImages[4]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">What's Included</span>
              <h2 className="mt-3 text-4xl font-serif text-primary font-bold uppercase mb-6">Inclusions In The Rent</h2>
              <div className="space-y-3">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 text-sm flex-shrink-0">✤</span>
                    <p className="text-foreground/65 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 border border-primary/20 rounded-xl bg-white">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/60 font-medium mb-2">Additional Services</p>
                {additionalServices.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary text-sm flex-shrink-0">✤</span>
                    <p className="text-foreground/65 text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">Please Read Carefully</span>
              <h2 className="mt-3 text-4xl font-serif text-primary font-bold uppercase mb-6">Terms & Conditions</h2>
              <div className="space-y-3">
                {terms.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary/40 text-xs font-bold flex-shrink-0 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-foreground/65 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
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
