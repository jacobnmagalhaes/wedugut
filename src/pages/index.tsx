import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainHomepage() {

    let style = {
        backgroundImage: 'url("/images/startup/splashLogo.png")'
    }

    return (
        <div className='h-screen w-screen'>

            <div className=' absolute top-12 w-full flex justify-center px-4 xl:hidden'>
                <Image  src="/images/startup/splashLogo.png" height={150} width={500} />
            </div>
            <div className=' absolute top-10 left-[43.5%] hidden justify-center px-4 xl:flex'>
                <Image  src="/images/startup/splashLogo.png" height={70} width={220} />
            </div>
            {/* object-cover */}
            <img src="images/startup/main.png" className='h-screen w-screen  object-cover lg:object-bottom  ' alt="" />

            <div className='h-[10vh] flex flex-col justify-center absolute bottom-10 w-full'>

                <Link href='/main'>
                    <img src="images/startup/startbutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>


            </div>


        </div>
    )
}
