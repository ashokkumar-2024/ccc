'use client'

import Image from 'next/image'

export default function Canvas() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <Image
        src="/topLeft.png"
        alt=""
        width={220}
        height={220}
        className="absolute top-0 left-0 pointer-events-none w-[100px] sm:w-[150px] md:w-[220px]"
      />
      <Image
        src="/topRight.png"
        alt=""
        width={220}
        height={220}
        className="absolute top-0 right-0 pointer-events-none w-[100px] sm:w-[150px] md:w-[220px]"
      />

      <div className="container mx-auto px-6">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <div className="flex justify-center opacity-60">
            <span className="text-primary text-2xl md:text-3xl">✤</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-primary uppercase leading-tight">
            Nature&apos;s Canvas For Your Unforgettable Moments
          </h2>

          <p className="text-foreground/70 leading-relaxed text-sm sm:text-base md:text-lg px-2 sm:px-0">
            Chaitanya Convention Centre is perfect for Weddings, Receptions, Birthday Parties, Meetings, Seminars, Stage Programs, and Concerts. We are buoyant enough to guarantee you that we have all the facilities needed for the success and beauty of your event.
          </p>
        </div>
      </div>
    </section>
  )
}
