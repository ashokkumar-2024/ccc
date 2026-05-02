'use client'

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 'max(100%, 177.78vh)', height: 'max(100%, 56.25vw)' }}>
        <iframe
          src="https://www.youtube.com/embed/4ZGAdsRjtKg?autoplay=1&mute=1&loop=1&playlist=4ZGAdsRjtKg&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1"
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ border: 'none', pointerEvents: 'none' }}
        />
      </div>
    </div>
  )
}
