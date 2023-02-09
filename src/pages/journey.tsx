import React from 'react'
import Link from 'next/link'

export default function Journey() {
    return (
        <div className='bg-gradient-to-t from-white to-[#3399cc] h-screen flex flex-col overflow-y-hidden'>



            <img src="images/prejourney/takejourney.webp" className=' w-8/12 lg:w-6/12 lg:h-screen m-auto ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>

                <Link href='/journey-' >
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
              
                {/* <Link href='/journey-' >
                    <img src="images/prejourney/SHAREBUTTON.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
               */}


            </div>

        </div>
    )
}
