'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EnquiryModal from '@/components/EnquiryModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'About Us' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#829180' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/CCC/Untitled design (12).png"
                alt="CCC Logo"
                width={140}
                height={56}
                loading="eager"
                className="object-contain brightness-0 invert"
              />
            </Link>
          </div>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="relative group text-xs font-medium tracking-widest uppercase text-white whitespace-nowrap transition-opacity hover:opacity-70"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right — Button + Hamburger */}
          <div className="flex items-center justify-end gap-3 w-32">
            <div className="hidden lg:block">
              <EnquiryModal />
            </div>
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full z-40 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: '#829180' }}
      >
        <nav className="flex flex-col px-6 py-5 gap-4 border-t border-white/10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium tracking-widest uppercase text-white py-2 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <EnquiryModal />
          </div>
        </nav>
      </div>
    </>
  )
}
