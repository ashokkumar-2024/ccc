'use client'

export default function LocationSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">Find Us</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif text-primary font-bold uppercase">Our Location</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-10 bg-primary/40" />
            <span className="text-primary opacity-50">✤</span>
            <div className="h-px w-10 bg-primary/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left — Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 h-[300px] sm:h-[400px] md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6!2d77.5499!3d12.9999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4b1e1e1e1b%3A0x1234567890abcdef!2sChaitanya%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right — Contact Info */}
          <div className="space-y-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                  </svg>
                ),
                label: 'Email',
                content: <a href="mailto:chaitanyaconventioncentre@gmail.com" className="hover:text-primary transition-colors">chaitanyaconventioncentre@gmail.com</a>,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                ),
                label: 'Phone',
                content: <><a href="tel:+919731116549" className="block hover:text-primary transition-colors">+91 9731116549</a><a href="tel:08023110069" className="block hover:text-primary transition-colors">080 23110069</a></>,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                  </svg>
                ),
                label: 'Website',
                content: <a href="https://www.chaitanyaconventioncentre.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.chaitanyaconventioncentre.com</a>,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                  </svg>
                ),
                label: 'Address',
                content: <span>12/15, Chord Rd, Rajaji Nagar Industrial Town,<br />West of Chord Road, Rajajinagar,<br />Bengaluru, Karnataka 560 044</span>,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                ),
                label: 'Timings',
                content: <span>10:00 AM – 8:00 PM</span>,
              },
            ].map(({ icon, label, content }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-white hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  {icon}
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase font-medium mb-1 text-primary/50">{label}</p>
                  <div className="text-foreground/70 text-sm leading-relaxed">{content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
