'use client'

const videos = [
  '/CCC/v1.mp4',
  '/CCC/v2.mp4',
  '/CCC/v3.mp4',
  '/CCC/v4.mp4',
]

export default function VideoGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="text-center mb-10 px-4">
        <div className="flex justify-center opacity-60 mb-3">
          <span className="text-primary text-3xl">✤</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary uppercase mb-3">
          Experience the Magic
        </h2>
        <p className="text-foreground/60 text-lg">
          Immerse yourself in the beauty and elegance of Nature Knots.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ height: '500px' }}>
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
