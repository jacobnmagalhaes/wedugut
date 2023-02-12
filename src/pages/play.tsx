import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

export default function PlayRedirect() {
    return (
        <div className='bg-gradient-to-t from-white to-[#3399cc] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/play.webp" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>

                <Link href='/play-' className='mb-2'>
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>



            </div>


            {/* footer  */}
            {/* <div className='h-[8vh] flex justify-center items-end' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div> */}

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
