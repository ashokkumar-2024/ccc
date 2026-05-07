'use client'

import Image from 'next/image'

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: '#551a25' }}>
      <div className="mb-8">
        <Image src="/CCC/cropped-Logo-CCC.png" alt="CCC Logo" width={160} height={80} className="object-contain mx-auto brightness-0 invert" />
      </div>

      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-12" style={{ backgroundColor: '#f3eac060' }} />
        <span className="text-2xl" style={{ color: '#f3eac0' }}>✤</span>
        <div className="h-px w-12" style={{ backgroundColor: '#f3eac060' }} />
      </div>

      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4" style={{ color: '#f3eac0' }}>
        Coming Soon
      </h1>

      <p className="text-base md:text-lg max-w-md mb-10" style={{ color: '#f3eac099' }}>
        We're working hard to bring you something beautiful. Stay tuned for an unforgettable experience.
      </p>

      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="h-px w-12" style={{ backgroundColor: '#f3eac060' }} />
        <span className="text-lg" style={{ color: '#f3eac060' }}>✤</span>
        <div className="h-px w-12" style={{ backgroundColor: '#f3eac060' }} />
      </div>

      <div className="space-y-2">
        <p className="text-sm" style={{ color: '#f3eac080' }}>For enquiries, reach us at</p>
        <a href="mailto:chaitanyaconventioncentre@gmail.com" className="text-sm hover:opacity-100 transition" style={{ color: '#f3eac0' }}>
          chaitanyaconventioncentre@gmail.com
        </a>
        <p className="text-sm" style={{ color: '#f3eac0' }}>+91 9731116549</p>
      </div>
    </main>
  )
}
