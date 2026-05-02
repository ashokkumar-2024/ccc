'use client'

import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'About Us' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/contact', label: 'Contact' },
  { href: '/', label: 'Our Offerings' },
  { href: '/', label: 'Blogs' },
]

const events = [
  'Wedding Ceremony',
  'Wedding Reception',
  'Sangeeth',
  'Engagement',
  'Baby Shower',
  'Naming Ceremony',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#4F5F52' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Col 1 — Logo + tagline */}
          <div className="space-y-5">
            <Image src="/CCC/Untitled design (12).png" alt="CCC Logo" width={150} height={70} className="object-contain" />
            <p className="text-sm leading-relaxed" style={{ color: '#FAF8F3' }}>
              Your perfect venue for every celebration — nestled in the heart of Rajajinagar, Bengaluru.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a href="/" className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110" style={{ borderColor: '#FAF8F330', color: '#FAF8F3' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="/" className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110" style={{ borderColor: '#FAF8F330', color: '#FAF8F3' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919731116549" className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110" style={{ borderColor: '#FAF8F330', color: '#FAF8F3' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 00.609.61l5.652-1.48A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.374-.217-3.882 1.016 1.034-3.77-.237-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase mb-6 pb-3 border-b" style={{ color: '#FAF8F3', borderColor: '#FAF8F320' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm flex items-center gap-2 group transition-all" style={{ color: '#FAF8F3' }}>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs" style={{ color: '#FAF8F3' }}>✤</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Events */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase mb-6 pb-3 border-b" style={{ color: '#FAF8F3', borderColor: '#FAF8F320' }}>
              Events We Host
            </h4>
            <ul className="space-y-3">
              {events.map((event) => (
                <li key={event} className="text-sm flex items-center gap-2 group" style={{ color: '#FAF8F3' }}>
                  <span className="text-xs transition-all duration-300 opacity-100" style={{ color: '#FAF8F3' }}>✤</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase mb-6 pb-3 border-b" style={{ color: '#FAF8F3', borderColor: '#FAF8F320' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#FAF8F3' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span className="text-sm leading-relaxed" style={{ color: '#FAF8F3' }}>
                  12/15, Chord Rd, Rajajinagar,<br />Bengaluru 560 044
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0" style={{ color: '#FAF8F3' }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                <a href="tel:+919731116549" className="text-sm hover:opacity-100 transition" style={{ color: '#FAF8F3' }}>+91 9731116549</a>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0" style={{ color: '#FAF8F3' }}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                <a href="mailto:chaitanyaconventioncentre@gmail.com" className="text-sm hover:opacity-100 transition break-all" style={{ color: '#FAF8F3' }}>
                  chaitanyaconventioncentre@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0" style={{ color: '#FAF8F3' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span className="text-sm" style={{ color: '#FAF8F3' }}>10:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: '#FAF8F315' }}>
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: '#FAF8F350' }}>© 2024 Chaitanya Convention Centre. All rights reserved.</p>
          <p className="text-xs" style={{ color: '#FAF8F350' }}>Designed with ✤ in Bengaluru</p>
        </div>
      </div>
    </footer>
  )
}
