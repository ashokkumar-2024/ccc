'use client'

const videos = [
  '/CCC/v1.mp4',
  '/CCC/v2.mp4',
  '/CCC/v3.mp4',
  '/CCC/v4.mp4',
]

export default function VideoGrid() {
  return (
    <section className="py-16" style={{ backgroundColor: '#4F5F52', backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><polygon points='45,3 87,45 45,87 3,45' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='0.6'/><circle cx='45' cy='45' r='9' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='4' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/><circle cx='45' cy='45' r='1.5' fill='rgba(255,255,255,0.18)'/><line x1='45' y1='36' x2='45' y2='3' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='45' y1='54' x2='45' y2='87' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='36' y1='45' x2='3' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><line x1='54' y1='45' x2='87' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/><circle cx='45' cy='3' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='45' cy='87' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='3' cy='45' r='2' fill='rgba(255,255,255,0.12)'/><circle cx='87' cy='45' r='2' fill='rgba(255,255,255,0.12)'/></svg>`)}") `, backgroundRepeat: 'repeat' }}>
      <div className="text-center mb-10 px-4">
        <div className="flex justify-center mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span className="text-3xl">✤</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase mb-3" style={{ color: '#bb9151' }}>
          Experience the Magic
        </h2>
        <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Immerse yourself in the beauty and elegance of CHAITANYA.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden w-full" style={{ height: 'clamp(240px, 50vw, 500px)' }}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
