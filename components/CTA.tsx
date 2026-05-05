'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const bgPatternSvg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'>
  <polygon points='45,3 87,45 45,87 3,45' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='0.6'/>
  <circle cx='45' cy='45' r='9' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/>
  <circle cx='45' cy='45' r='4' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='0.6'/>
  <circle cx='45' cy='45' r='1.5' fill='rgba(255,255,255,0.18)'/>
  <line x1='45' y1='36' x2='45' y2='3' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <line x1='45' y1='54' x2='45' y2='87' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <line x1='36' y1='45' x2='3' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <line x1='54' y1='45' x2='87' y2='45' stroke='rgba(255,255,255,0.07)' stroke-width='0.5'/>
  <circle cx='45' cy='3' r='2' fill='rgba(255,255,255,0.12)'/>
  <circle cx='45' cy='87' r='2' fill='rgba(255,255,255,0.12)'/>
  <circle cx='3' cy='45' r='2' fill='rgba(255,255,255,0.12)'/>
  <circle cx='87' cy='45' r='2' fill='rgba(255,255,255,0.12)'/>
</svg>`)

export default function CTA() {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: '#4F5F52',
        backgroundImage: `url("data:image/svg+xml,${bgPatternSvg}")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-8 md:mb-12 font-semibold text-white">
            ✤ REACH OUT AND LET&apos;S CREATE ✤
          </h2>

          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="First Name" className="bg-white text-foreground border-0" />
              <Input placeholder="Last Name" className="bg-white text-foreground border-0" />
            </div>
            <Input type="email" placeholder="Email Address" className="bg-white text-foreground border-0" />
            <Input placeholder="Phone" className="bg-white text-foreground border-0" />
            <Textarea placeholder="Tell us about your event" className="bg-white text-foreground border-0 min-h-32" />
            <div className="flex justify-center">
              <Button className="hover:opacity-90 transition border-0" style={{ backgroundColor: '#bb9151', color: '#fff' }}>
                SEND INQUIRY
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
