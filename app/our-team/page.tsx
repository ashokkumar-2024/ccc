'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TeamContent from '@/components/TeamContent'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function OurTeam() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero title="OUR TEAM" />
      <TeamContent />
      <CTABanner />
      <Footer />
    </main>
  )
}
