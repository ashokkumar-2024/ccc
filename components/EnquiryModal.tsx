'use client'

import { useState } from 'react'

interface Props {
  trigger?: (open: () => void) => React.ReactNode
}

export default function EnquiryModal({ trigger }: Props = {}) {
  const [open, setOpen] = useState(false)

  const defaultTrigger = (
    <button
      onClick={() => setOpen(true)}
      className="text-xs tracking-widest uppercase font-semibold border px-4 py-2 transition-colors"
      style={{ borderColor: '#ffffff', color: '#ffffff' }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#bb9151'; e.currentTarget.style.borderColor = '#bb9151'; e.currentTarget.style.color = '#ffffff' }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.color = '#ffffff' }}
    >
      ENQUIRE NOW
    </button>
  )

  return (
    <>
      {trigger ? trigger(() => setOpen(true)) : defaultTrigger}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 z-10">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition"
              style={{ backgroundColor: '#4F5F52' }}
            >
              ✕
            </button>

            <h3 className="text-2xl font-serif font-bold mb-1" style={{ color: '#4F5F52' }}>Send an Enquiry</h3>
            <p className="text-foreground/50 text-sm mb-6">Fill in the details and we'll get back to you shortly.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background" />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background" />
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background" />
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>Event Type</label>
                <select className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background">
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
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>Event Date</label>
                <input type="date" className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background" />
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1.5" style={{ color: '#4F5F52' }}>Message</label>
                <textarea rows={3} placeholder="Tell us about your event..." className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 bg-background resize-none" />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-[0.2em] uppercase text-white transition-colors"
                style={{ backgroundColor: '#bb9151' }}
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
