import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

export default function Dugutopia() {


    return (
        <div className='bg-[#0084b4] h-screen flex flex-col'>


            <img src="images/startup/dugutopia.png" className='h-5/6 mx-auto mt-24  ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>
                <Link href='/dugutopia-'  className='mb-2'>
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
                {/* <a href='http://friends.dugut.app ' target={'blank'} className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto' alt="" />
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
