import { useState } from 'react'
import Image from 'next/image'
import Popup from '../Components/Popup/Popup'
import { HeaderComponent } from '../Components/Header'
import SideBarMenu from '../Components/Sidebar/SideBarMenu'
import { FooterComponent } from '../Components/Footer'
import VideosHack from '../screens/VideosHack'

export default function VideosHackPage() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <Popup isOpen={isVisible} setIsOpen={setIsVisible}>
        <>
          <>
            <Image src='/images/videos-hack/VIDEO PAGE POPUP.png' width={2211} height={2681} />
            <img
              src='/images/main/Gobutton-1.webp'
              className='w-44 cursor-pointer'
              onClick={() => setIsVisible(false)}
            />
          </>
        </>
      </Popup>
      <HeaderComponent image={'/images/homePage/Logo.webp'} />{' '}
      <div className='min-h-[100vh] flex'>
        <SideBarMenu />
        <VideosHack />
      </div>
      <FooterComponent />
    </>
  )
}
