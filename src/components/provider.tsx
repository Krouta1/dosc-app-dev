import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'
import { SidebarProvider } from './ui/sidebar'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  )
}

export default AppProviders
