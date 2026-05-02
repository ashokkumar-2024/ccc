'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="pt-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl py-20 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/60 font-medium">Get In Touch</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-serif text-primary font-bold uppercase">Contact Us</h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-primary opacity-40 text-xl">✤</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <p className="mt-5 text-foreground/55 text-base max-w-lg mx-auto">
            We'd love to hear from you. Reach out to us for bookings, enquiries, or just to say hello.
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left — Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-primary font-bold mb-2">Chaitanya Convention Centre</h2>
                <div className="h-px w-16 bg-primary/30 mb-6" />
              </div>

              {/* Info Cards */}
              <div className="space-y-5">
                {/* Mail */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-white hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M2 7l10 7 10-7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/50 font-medium mb-1">Email</p>
                    <a href="mailto:chaitanyaconventioncentre@gmail.com" className="text-foreground/75 text-sm hover:text-primary transition-colors">
                      chaitanyaconventioncentre@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-white hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/50 font-medium mb-1">Phone</p>
                    <a href="tel:+919731116549" className="text-foreground/75 text-sm hover:text-primary transition-colors block">+91 9731116549</a>
                    <a href="tel:08023110069" className="text-foreground/75 text-sm hover:text-primary transition-colors block">080 23110069</a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-white hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/50 font-medium mb-1">Website</p>
                    <a href="https://www.chaitanyaconventioncentre.com" target="_blank" rel="noopener noreferrer" className="text-foreground/75 text-sm hover:text-primary transition-colors">
                      www.chaitanyaconventioncentre.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-white hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/50 font-medium mb-1">Address</p>
                    <p className="text-foreground/75 text-sm leading-relaxed">
                      12/15, Chord Rd, Rajaji Nagar Industrial Town,<br />
                      West of Chord Road, Rajajinagar,<br />
                      Bengaluru, Karnataka 560 044
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-white hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/50 font-medium mb-1">Timings</p>
                    <p className="text-foreground/75 text-sm">10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary font-bold mb-1">Send an Enquiry</h3>
              <p className="text-foreground/50 text-sm mb-6">Fill in the details and we'll get back to you shortly.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">First Name</label>
                    <input type="text" placeholder="John" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background" />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background" />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background" />
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background" />
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">Event Type</label>
                  <select className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background">
                    <option value="">Select an event</option>
                    <option>Wedding Ceremony</option>
                    <option>Wedding Reception</option>
                    <option>Sangeeth</option>
                    <option>Engagement</option>
                    <option>Baby Shower</option>
                    <option>Naming Ceremony</option>
                    <option>Upanayanam</option>
                    <option>Corporate Event</option>
                    <option>Trade Show</option>
                    <option>Music Concert</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">Event Date</label>
                  <input type="date" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background" />
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-primary/60 font-medium block mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Tell us about your event..." className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-primary/40 bg-background resize-none" />
                </div>

                <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-xl text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-background pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-primary/60 font-medium">Find Us</span>
            <h2 className="mt-3 text-4xl font-serif text-primary font-bold uppercase">Our Location</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-10 bg-primary/40" />
              <span className="text-primary opacity-50">✤</span>
              <div className="h-px w-10 bg-primary/40" />
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-primary/10 h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.5499!3d12.9999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b8b8b8b8b%3A0x0!2sChaitanya+Convention+Centre%2C+12%2F15%2C+Chord+Rd%2C+Rajajinagar%2C+Bengaluru%2C+Karnataka+560044!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
