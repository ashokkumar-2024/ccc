'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Canvas from '@/components/Canvas'
import ValuesSection from '@/components/ValuesSection'
import ServicesGrid from '@/components/ServicesGrid'
import Gallery from '@/components/Gallery'
import VideoGrid from '@/components/VideoGrid'
import FacilitySection from '@/components/FacilitySection'
import RoomsSection from '@/components/RoomsSection'
import CTA from '@/components/CTA'
import LocationSection from '@/components/LocationSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Canvas />
      <ValuesSection />
      <ServicesGrid />
      <Gallery />
      <VideoGrid />
      <RoomsSection />
      <CTA />
      <LocationSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
