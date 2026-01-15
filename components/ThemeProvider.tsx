'use client'

// Simple provider that always uses light theme
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
