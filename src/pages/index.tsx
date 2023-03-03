import { useState } from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'
import SideBarMenu from '../Components/sidebar/SideBarMenu'
import HomeMain from '../screens/Main/HomeMain'
import HomeMainPopup from '../screens/Main/HomeMainPopup'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <HomeMainPopup isVisible={isOpen} setIsOpen={setIsOpen} />
      <HeaderComponent image={'/images/homePage/Logo.webp'} />{' '}
      <div className='min-h-[100vh] flex'>
        <SideBarMenu />
        <HomeMain />
      </div>
      <FooterComponent />
    </>
  )
}
