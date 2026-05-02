'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CelebrationsContent from '@/components/CelebrationsContent'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Celebrations() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero title="CELEBRATIONS BY NK" />
      <CelebrationsContent />
      <CTABanner />
      <Footer />
    </main>
  )
}
