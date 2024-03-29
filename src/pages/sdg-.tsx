import Script from 'next/script'
import React from 'react'
import { HeaderComponent } from '../Components/header'
import LayoutComponent from '../Components/Layout'
import SdgComponent from '../Components/Main/sdg'

export default function Sdg() {
    return (
        <>

            <HeaderComponent image={'/images/homePage/Logo.webp'} />


            <div className='-mt-5 bg-center bg-cover'>

                <SdgComponent />
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
