import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainHomepage() {

    let style = {
        backgroundImage: 'url("/images/startup/splashLogo.png")'
    }

    return (
        <div className='h-screen bg-startupmain bg-center bg-cover'>

            <div className=' absolute top-8 w-full flex justify-center px-4 '>
                <Image  src="/images/startup/splashLogo.webp" height={180} width={500} />
            </div>
         
            {/* <img src="images/startup/main.webp" className='h-screen w-screen  o  ' alt="" /> */}

            <div className='h-[10vh] flex flex-col justify-center absolute bottom-10 w-full'>

                <Link href='/main'>
                    <img src="images/startup/startbutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>


            </div>


        </div>
    )
}
