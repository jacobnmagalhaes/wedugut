import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { FooterComponent } from '../Footer'
import { HeaderComponent } from '../Header'
import SideBarMenu from '../Sidebar/SideBarMenu'

interface LayoutProps {
  children: ReactNode
}

export default function LayoutComponent({ children }: LayoutProps) {
  const router = useRouter()

  return (
    <div
      className='h-full min-h-screen w-full font-bold flex flex-col bg-mobile bg-no-repeat 
    bg-center bg-cover lg:bg-web font-pt-sans'>
      <HeaderComponent
        image={router.asPath === '/' ? '/images/homePage/Logo.webp' : '/images/homePage/Logo.webp'}
      />
      <SideBarMenu />
      <div className='flex-1'>{children}</div>
      <FooterComponent />
    </div>
  )
}
