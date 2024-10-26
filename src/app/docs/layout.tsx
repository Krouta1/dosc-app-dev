import { AppSidebar } from '@/components/sidebar/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

interface DocsLayoutProps {
  children: React.ReactNode
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="sticky top-0 h-20">asdasdhasjkd</div>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default DocsLayout
