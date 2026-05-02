'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StoryContent from '@/components/StoryContent'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function OurStory() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero title="OUR STORY" />
      <StoryContent />
      <CTABanner />
      <Footer />
    </main>
  )
}
