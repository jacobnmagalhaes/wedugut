import Link from 'next/link'
import React from 'react'

export default function MainHomepage() {

   
    return (
        <div> 

            <img src="images/startup/main.png" className='h-screen w-screen object-cover md:object-fill' alt="" />

            <div className='h-[10vh] flex justify-center absolute bottom-10 w-full'>

                <Link href='/main'>
                    <img src="images/startup/startbutton.png" className='cursor-pointer hover:brightness-110 ' alt="" />
                </Link>

            </div>


        </div>
    )
}
