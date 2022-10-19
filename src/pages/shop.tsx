import React from 'react'

export default function Shop() {
    return (
        <div className='bg-[#cc0033] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/shop.png" className='h-5/6  mx-auto mt-12  ' alt="" />

            <div className='h-[10vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-4 md:bottom-3 w-full '>


                
                <a href='https://friends.dugut.app/shop' target={'blank'} className='mb-2'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </a>

                <a href='http://friends.dugut.app ' target={'blank'}>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 m-auto mt-2' alt="" />
                </a>




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
