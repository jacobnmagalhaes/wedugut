import React from 'react'
import TakeAction from '../Components/Main/takeaction'
import { HeaderComponent } from '../Components/header'
import Script from 'next/script'

export default function TakeActionMain() {
    return (
        <div>


<HeaderComponent image={'/images/homePage/Logo.webp'} />

            <TakeAction />
            {/* footer  */}
            <div>
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

        </div>
    )
}
