import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React, { useState } from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'
import Popup from '../Components/Popup/Popup'
import SideBarMenu from '../Components/sidebar/SideBarMenu'
import Sdg from '../screens/Sdg'

export default function SdgRedirect() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <Popup isOpen={isVisible} setIsOpen={setIsVisible}>
        <>
          <Image src='/images/sdg/SDG PAGE POPUP.png' width={2226} height={2679} />
          <img
            src='/images/main/Gobutton-1.webp'
            className='w-44 cursor-pointer'
            onClick={() => setIsVisible(false)}
          />
        </>
      </Popup>
      <HeaderComponent image={'/images/homePage/Logo.webp'} />{' '}
      <div className='min-h-[100vh] flex'>
        <SideBarMenu />
        <Sdg />
      </div>
      <FooterComponent />
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-0GMXD0ECE2'></Script>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-0GMXD0ECE2');
        `,
        }}
      />
    </>
  )
}
