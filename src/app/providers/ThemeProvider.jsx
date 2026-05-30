'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="data-theme" enableSystem defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}
