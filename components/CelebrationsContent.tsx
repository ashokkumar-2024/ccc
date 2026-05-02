'use client'

import { Card } from '@/components/ui/card'

export default function CelebrationsContent() {
  const services = [
    {
      icon: '🎨',
      title: 'Elevated\nDecor & Design',
      description: 'Transforming Spaces with Imagination and Precision'
    },
    {
      icon: '🏨',
      title: 'Accommodating\nYour Guests',
      description: 'Ensuring Comfort Beyond Venue Limits'
    },
    {
      icon: '🍽️',
      title: 'Culinary\nCuration',
      description: 'From Tastings to Finalizing the Perfect Caterer'
    },
    {
      icon: '✉️',
      title: 'Bespoke\nInvitations',
      description: 'Crafting Your Unique Wedding Story with Style'
    },
    {
      icon: '✈️',
      title: 'Guest Travel\nManagement',
      description: 'Making Arrangements Effortlessly Seamless'
    },
    {
      icon: '🎭',
      title: 'Talent\nCoordination',
      description: 'From Celebrities to Makeup Artists, We&apos;ve Got You Covered'
    },
    {
      icon: '🎬',
      title: 'Creative\nVisionaries',
      description: 'Choreographers, Photographers, and More'
    },
    {
      icon: '🎁',
      title: 'Thoughtful\nGestures',
      description: 'Hampers, Trinkets, Packaging, and Personalized Touches'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center opacity-40 mb-2">
            <span className="text-primary text-3xl">✤</span>
          </div>
          <h2 className="text-4xl font-serif text-primary mb-6 font-semibold">YOUR EVENT, OUR EXPERTISE</h2>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Celebrations by NK is your one-stop destination for everything around weddings and events.</strong> To make your special day even more memorable, we ensure a <strong>seamless and memorable experience from start to finish.</strong>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 text-center border-b-4 border-primary/20 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-primary font-semibold mb-3 whitespace-pre-line text-lg">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
