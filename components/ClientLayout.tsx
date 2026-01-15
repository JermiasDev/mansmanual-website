'use client'

import { ThemeProvider } from './ThemeProvider'
import Navigation from './Navigation'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </ThemeProvider>
  )
}
