'use client'

export default function CTABanner() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: '#cfb488' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold" style={{ color: '#4F5F52' }}>
              Need a head start to<br />your dream wedding?
            </h2>
          </div>
          <a href="/contact" className="flex-shrink-0 relative inline-flex items-center px-8 sm:px-10 py-3.5 text-sm font-semibold tracking-[0.2em] uppercase overflow-hidden" style={{ color: '#4F5F52' }}>
            <span className="absolute inset-0 rounded-sm overflow-hidden">
              <span className="absolute inset-0" style={{
                background: `conic-gradient(from 0deg, transparent 180deg, #4F5F52 360deg)`,
                animation: 'spin-border 3s linear infinite',
                transformOrigin: 'center',
              }} />
              <span className="absolute inset-[2px] rounded-sm" style={{ backgroundColor: '#cfb488' }} />
            </span>
            <span className="relative z-10">Contact Us</span>
            <style jsx>{`
              @keyframes spin-border {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
              }
            `}</style>
          </a>
        </div>
      </div>
    </section>
  )
}
