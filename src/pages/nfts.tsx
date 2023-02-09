import React from 'react'

export default function Nfts() {
    return (
        <div className='bg-[#ef6c00] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/nft.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>

                <a href="http://actionist.dugutopia.com" target={'blank'} className='mb-2' >

                    <img src="images/startup/GOButton.webp" alt="" className='cursor-pointer hover:brightness-110 w-40 m-auto ' />

                </a>
                {/* <a href='http://friends.dugut.app ' target={'blank'} className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto' alt="" />
                </a> */}





                {/* <p className='text-white text-lg '>Connect</p> */}
            </div>


         

        </div>
    )
}
