'use client'

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

const MeditationIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto">
    <circle cx="32" cy="9" r="5" />
    <path d="M32 14 C32 14 32 20 32 22" />
    <path d="M10 28 C14 24 22 22 32 22 C42 22 50 24 54 28" />
    <path d="M10 28 C7 32 9 38 15 40" />
    <path d="M54 28 C57 32 55 38 49 40" />
    <path d="M15 40 Q20 50 32 52 Q44 50 49 40" />
    <line x1="32" y1="1" x2="32" y2="3" />
    <line x1="38" y1="2.5" x2="39.5" y2="1" />
    <line x1="26" y1="2.5" x2="24.5" y2="1" />
    <line x1="42" y1="5" x2="44" y2="4" />
    <line x1="22" y1="5" x2="20" y2="4" />
  </svg>
)

const EcoIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto">
    <path d="M10 44 C10 44 14 38 22 38 L42 38 C48 38 52 42 52 46 C52 50 48 54 42 54 L22 54 C16 54 12 50 12 46" />
    <path d="M28 38 L28 28" />
    <path d="M28 28 C28 28 22 22 22 14 C28 14 34 18 34 26 C34 26 34 28 28 28" />
    <path d="M28 24 C28 24 32 18 38 16" />
  </svg>
)

const CrownIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto">
    <path d="M8 44 L8 52 L56 52 L56 44" />
    <path d="M8 44 L16 24 L32 38 L48 24 L56 44 Z" />
    <circle cx="32" cy="18" r="4" />
    <circle cx="14" cy="22" r="3" />
    <circle cx="50" cy="22" r="3" />
    <line x1="8" y1="48" x2="56" y2="48" />
  </svg>
)

const ButterflyIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto">
    <path d="M32 20 C32 20 18 10 10 18 C4 24 10 36 20 36 C26 36 30 32 32 28" />
    <path d="M32 20 C32 20 46 10 54 18 C60 24 54 36 44 36 C38 36 34 32 32 28" />
    <path d="M32 28 C32 28 22 34 18 44 C22 48 28 44 32 40" />
    <path d="M32 28 C32 28 42 34 46 44 C42 48 36 44 32 40" />
    <line x1="32" y1="16" x2="32" y2="42" />
    <path d="M30 16 C30 14 32 12 34 14" strokeWidth="1" />
  </svg>
)

const values = [
  {
    Icon: MeditationIcon,
    title: 'TRANQUIL LOCATION',
    description: 'Immerse in serenity at our nature-inspired venue, where peaceful landscapes create the perfect backdrop for your special moments.',
  },
  {
    Icon: EcoIcon,
    title: 'ECO-FRIENDLY PRACTICES',
    description: 'Celebrate sustainably in our eco-friendly venue, where luxury meets environmental responsibility.',
  },
  {
    Icon: CrownIcon,
    title: 'LUXURY & NATURAL SPLENDOR',
    description: 'Enjoy refined elegance amidst breathtaking natural beauty for a truly memorable event experience.',
  },
  {
    Icon: ButterflyIcon,
    title: 'SANCTUARY VIBES',
    description: 'Feel the embrace of nature at our sanctuary, where lush greenery and tranquil surroundings create a haven for your events.',
  },
]

function GoldCorners() {
  return (
    <>
      <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-yellow-500" />
      <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-yellow-500" />
      <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-yellow-500" />
      <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-yellow-500" />
    </>
  )
}

export default function ValuesSection() {
  return (
    <section
      className="py-14 md:py-20 relative"
      style={{
        backgroundColor: '#4F5F52',
        backgroundImage: `url("data:image/svg+xml,${bgPatternSvg}")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 md:mb-14 tracking-wide">
          NURTURE • NATURE • CELEBRATION
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
          {values.map(({ Icon, title, description }, index) => (
            <div key={index} className="bg-white relative p-7 sm:p-8 md:p-10 text-center">
              <GoldCorners />
              <div className="text-[#4F5F52] mb-4 md:mb-5">
                <Icon />
              </div>
              <h3 className="text-[#4F5F52] font-bold text-sm sm:text-base md:text-lg tracking-wide mb-3 md:mb-5">{title}</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
