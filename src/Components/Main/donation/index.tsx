import Image from 'next/image'
import React, { useState } from 'react'

export default function MainDonation() {

  const [popup, setpopup] = useState(true)
  let imgs = [
    { src: '/images/donation/ukraine.jpg', href: '', text: "Ukraine is bracing for a brutal winter as Russian missile strikes have damaged nearly half of the country's electrical grid. As many as 10 million Ukrainians do not have power. Hundreds of hospitals and health care facilities are no longer fully operational—lacking fuel, water, and electricity to meet basic need. Help the Ukraine face this winter…", head: 'Ukraine Journey' },
    { src: '/images/donation/second.png', href: '', text: "At VO.U. - University Volunteer Association, we believe in the concept of Higher Education Solidarity! Our Life Plan covers 4 projects and focus on the promotion of our health, as well as that of our habitat. Additionally, we recognize the urgency of preserving the health and balance of ecosystems and raising awareness of the need to take care of our Home, Planet Earth…", head: 'Vou Journey' },

  ]

  return (
    <>
      {/* popup */}
      {/* {popup && <div className='absolute w-full h-80 bg-blue-300 z-30 top-[15%] opacity-80 flex flex-col justify-center items-center'>
        <p className='text-3xl font-normal'>Coming soon</p>
        <button className='bg-red-500 hover:bg-red-600 py-3 px-5 mt-5 rounded-md ' onClick={() => setpopup(false)}>Close</button>
      </div>} */}

      <div className=' w-screen min-h-screen bg-journey'>

        <div className=' flex justify-center items-center pt-10' >


          <img className='h-36 px-3 md:p-0'
            src={'/images/donation/logo.png'}

          />

        </div>


        <div className='flex justify-center items-center w-full '>

          {/* images  */}
          <div className='flex flex-wrap m-5 items-center justify-around px-2 md:px-0 w-full '>

            {imgs.map((x, idx) => (
              <div key={idx} className='flex m-5 mb-8 '>


                <a href={x.href} target={'blank'}>

                  <Image
                    src={x.src}
                    height='285'
                    width='300'
                    className='cursor-pointer hover:brightness-110 '

                  />
                </a>

                <div className='flex flex-col w-52 mx-2 text-white justify-center items-center'>
                  <p className='text-left my-1 ml-5 text-xs md:text-sm'>{x.text}</p>


                  <a href={x.href} target={'blank'} className='mt-3 hover:brightness-110'>

                    <Image src='/images/donation/button.png'
                      height='75'
                      width='180'
                    />
                  </a>

                  <a href='' target={'blank'}>

                    <Image src={'/images/journey/SHAREBUTTON.png'} height={50} width={150} className='cursor-pointer hover:brightness-110  ' />

                  </a>


                </div>
              </div>
            ))}
          </div>


          <div>

          </div>


        </div>
      </div>

    </>
  )
}
