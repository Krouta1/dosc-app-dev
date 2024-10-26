import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AppLogo = () => {
  return (
    <Link href={'/home'}>
      <div className="block dark:hidden">
        <Image src="/logo-dark.svg" alt="logo" width={120} height={120} />
      </div>
      <div className="hidden dark:block">
        <Image src="/logo-white.svg" alt="logo" width={120} height={120} />
      </div>
    </Link>
  )
}

export default AppLogo
