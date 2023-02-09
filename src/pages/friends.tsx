import Link from 'next/link'
import React from 'react'

export default function Friends() {


    return ( 
        <div className='bg-gradient-to-t from-white to-[#3399cc] h-screen ' >


            <div className='flex justify-center  h-screen overflow-y-hidden pt-60 md:pt-8 '>

                <img src="images/startup/friends.webp" className='object-contain' alt="" />
            </div>
            <div className='h-[18vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full  '>
               
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
