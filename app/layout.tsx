import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mansmanualapp.com'),
  title: {
    default: "Man's Manual - Build Discipline. Strengthen Faith. Transform Your Life.",
    template: "%s | Man's Manual"
  },
  description: "Man's Manual is the ultimate accountability platform for men seeking growth in Faith, Fitness, and Focus. Track habits, study scripture, plan workouts, and achieve your goals with AI-powered guidance.",
  keywords: [
    "men's personal development app",
    "faith-based productivity",
    "Christian task management",
    "Bible study app",
    "prayer journal",
    "men's fitness planning",
    "habit tracking for men",
    "discipline and growth",
    "accountability app for men",
    "Christian habit tracker"
  ],
  authors: [{ name: "Man's Manual LLC" }],
  creator: "Man's Manual LLC",
  publisher: "Man's Manual LLC",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mansmanualapp.com',
    siteName: "Man's Manual",
    title: "Man's Manual - Build Discipline. Strengthen Faith. Transform Your Life.",
    description: "The ultimate accountability platform for men seeking growth in Faith, Fitness, and Focus.",
    images: [
      {
        url: '/og-image.png', // TODO: Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Man's Manual App",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Man's Manual - Build Discipline. Strengthen Faith. Transform Your Life.",
    description: "The ultimate accountability platform for men seeking growth in Faith, Fitness, and Focus.",
    images: ['/og-image.png'], // TODO: Add your Twitter card image
    creator: '@mansmanualapp', // TODO: Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // TODO: Add Google Search Console verification
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
