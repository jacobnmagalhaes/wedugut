import React from 'react'

export default function Shop() {
    return (
        <div className='bg-gradient-to-t from-white to-[#3399cc] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/shop.webp" className='h-5/6 md:mx-auto mt-12 object-contain p-1 w-12/12   lg:w-6/12  ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>


                
                <a href='https://friends.dugut.app/shop' target={'blank'} className='mb-2'>
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </a>

                {/* <a href='http://friends.dugut.app ' target={'blank'} className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto' alt="" />
                </a> */}




            </div>


            {/* footer  */}
            {/* <div className='h-[18vh] flex justify-center items-end' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div> */}

        </div>
    )
}
