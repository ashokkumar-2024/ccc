import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chaitanya Convention Centre | Celebrate in Style',
  description: 'Chaitanya Convention Centre — a premium event venue in the heart of Rajajinagar, Bengaluru. Perfect for weddings, receptions, corporate events, and more.',
  icons: {
    icon: [
      { url: '/CCC/cropped-Logo-CCC.png', type: 'image/png' },
    ],
    apple: '/CCC/cropped-Logo-CCC.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
