import Link from 'next/link'
import Script from 'next/script'
import React, { useEffect } from 'react'

export default function Redirect_to_Action() {







    return (
        <div className='bg-gradient-to-t from-white to-cyan-300 h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/action.webp" className='h-full mx-auto mt-12 md:mt-0 ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>

                <Link href='/action-' >
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
                {/* <a href='http://friends.dugut.app ' target={'blank'} className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto ' alt="" />
                </a> */}


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
