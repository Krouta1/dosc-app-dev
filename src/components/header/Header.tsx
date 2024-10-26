import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import HeaderNews from './HeaderNews'
import Container from '../container'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import AppLogo from './AppLogo'

const Header = () => {
  return (
    <div className="h-full w-full border-b border-primary/5 backdrop-blur-3xl">
      <HeaderNews />
      <Container className="flex h-20 w-full items-center justify-between md:justify-normal">
        <AppLogo />
        <div className="ml-10 hidden grow md:block">Here comes some menu</div>
        <div className="hidden md:flex md:items-center md:space-x-2">
          <ModeToggle />
          <Button
            className="px-10 transition-all duration-500 hover:scale-105"
            variant={'default'}
            size={'lg'}
          >
            Sign in
          </Button>
        </div>
        <div className="block md:hidden">
          <Menu size={32} />
        </div>
      </Container>
    </div>
  )
}

export default Header
