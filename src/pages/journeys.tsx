import { useState } from 'react'
import Link from 'next/link'
import { FooterComponent } from '../Components/Footer'
import SideBarMenu from '../Components/Sidebar/SideBarMenu'
import { HeaderComponent } from '../Components/Header'
import Popup from '../Components/Popup/Popup'
import Image from 'next/image'
import Journeys from '../screens/Journeys'

export default function Journey() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <Popup isOpen={isVisible} setIsOpen={setIsVisible}>
        <>
          <>
            <Image src='/images/journey/JOURNEY PAGE POPUP.png' width={2175} height={2803} />
            <img
              src='/images/main/Gobutton-1.webp'
              className='w-44 cursor-pointer'
              onClick={() => setIsVisible(false)}
            />
          </>
        </>
      </Popup>
      <HeaderComponent image={'/images/homePage/Logo.webp'} />
      <div className='min-h-[100vh] flex'>
        <SideBarMenu />
        <Journeys />
      </div>
      <FooterComponent />
    </>
  )
}
