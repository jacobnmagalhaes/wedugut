import Image from 'next/image'
import Script from 'next/script'
import React from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'
import Journey from '../Components/Main/journey'

export default function JourneyMain() {
    return (
        <>
            <HeaderComponent image={'/images/homePage/Logo.webp'} />

            <Journey />

            {/* footer  */}
            <div >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div>

            <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-0GMXD0ECE2"></Script>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
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
