import Header from '@/components/header/Header'
import React from 'react'

interface HomeLayoutProps {
  children: React.ReactNode
}

const DocsLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="h-screen w-full">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="h-full">{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default DocsLayout
