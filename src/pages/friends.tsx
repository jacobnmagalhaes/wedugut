import Link from 'next/link'
import React from 'react'

export default function Friends() {


    return (
        <div className='bg-gradient-to-t from-white to-[#3399cc] min-h-screen max-h-screen overflow-y-hidden ' >


            <div className='flex justify-center items-end h-screen  '>

                <img src="images/startup/friends.webp" className='object-contain' alt="" />
            </div>
            <div className='h-[18vh] flex flex-col justify-center absolute bottom-0 md:bottom-6 w-full  '>

                <a href='https://friends.dugut.app' target={'blank'} className='-mb-8 md:-mb-20'>
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </a>

                {/* <a href='http://friends.dugut.app ' target={'blank'}>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-24 m-auto ' alt="" />
                </a> */}


            </div>


        </div>
    )
}
