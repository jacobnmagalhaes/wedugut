import Link from 'next/link'
import React from 'react'

export default function KidsRedirect() {

    let style = {
        backgroundImage: 'url("images/startup/kids.png")'
    }


    return (
        <div className='bg-[#ff2ab7] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/kids.png" className='h-full lg:w-4/6 m-auto ' alt="" />

            <div className='h-[10vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-2 md:bottom-2 w-full'>

                <Link href='/kids-' className='mb-2'>
                    <img src="images/startup/Gobutton.png"  className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>

                <a href='http://friends.dugut.app' target='blank' className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto' alt="" />
                </a>


            </div>




        </div>
    )
}
