'use client'

export default function TeamContent() {
  const testimonials = [
    {
      name: 'SINDHI MAHARANI SHETTI',
      title: 'Groom\'s Mom, 2023',
      quote: 'A tremendously organized and professional event left a lasting impression. We have experienced one exceptional event, and that\'s what we booked for again and again and again. Imagination is what impressed us on the premium and had language and attention to detail left us awestruck. We would not hesitate to recommend them for our friend\'s event.'
    },
    {
      name: 'KRISHNA BHAGWAN',
      title: 'Groom\'s Friend, 2024',
      quote: 'The Imagination vibe of your heart, soul. N left us blown away. The fact that we booked for a perfect place to create memories at a Imagination where they made hosting a grand celebration out over kind. I find it hard to find any negatives.'
    },
    {
      name: 'SHRUTHI',
      title: 'Groom\'s Sister, 2024',
      quote: 'When we started looking at venues to get our special day set with even better than our dreams, the warmth and attitude of the whole team behind the Imagination us confidence and a deep sense of ease for an eventuality, what a place to decide to choose to say our vows with all...'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex justify-center opacity-40 mb-2">
              <span className="text-primary text-3xl">✤</span>
            </div>
            <h2 className="text-4xl font-serif text-primary font-semibold">THE FORCE BEHIND THE FUTURE</h2>
            <div className="flex justify-center opacity-40 mt-2">
              <span className="text-primary text-3xl">✤</span>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-6 text-center">
            When you start looking for a team to help you realize your celebration, you&apos;re not just looking for a team but rather an extension of yourself. They understand the nuances and the unknown leads you can trust. It&apos;s not just about the details; it&apos;s about the people who care. Nature is expected to come all over us and that&apos;s beautiful about an event. What it comes to an event, Nature &apos;s is a expected revision of the event industry who has helped clients create extraordinary celebrations throughout our careers across the country. We &apos;lll is a expected revision of the event industry who has helped clients create extraordinary celebrations throughout our careers.
          </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-3 gap-6 my-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center text-foreground/40">
                <p className="text-sm">Team Member {i}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Edge Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex justify-center opacity-40 mb-2">
              <span className="text-primary text-3xl">✤</span>
            </div>
            <h2 className="text-4xl font-serif text-primary font-semibold">UNVEILING OUR EDGE</h2>
            <div className="flex justify-center opacity-40 mt-2">
              <span className="text-primary text-3xl">✤</span>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed text-center mb-12">
            Across month is past of the event companies NK Event happen. They are a doreen and respected entity to a space of Bengaluru&apos;s top event management teams. There are various ways of things, partnerships, and advertisements. With eight years of high-end experience, we have curated and executed everything from high-scale international weddings to intimate and brand activations. Our team expertise lies in vendor curation with different performance and guest lists, we have provided consistently leveraging partnerships, vendors, locations, brand activation, cultural events, destination shows and over specialized touch to the team of guest...
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i}
                className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center text-foreground/40"
              >
                <p className="text-xs">Event {i}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary font-semibold">WHAT THEY SAY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 border-t-2 border-primary">
                <div className="text-3xl text-primary mb-3">&quot;</div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <h4 className="text-primary font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-foreground/50 text-xs">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
