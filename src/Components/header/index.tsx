import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// component
import Sidebar from '../sidebar/Sidebar'

interface PropsHeader {
  image: string
}

export function HeaderComponent({ image }: PropsHeader) {
  const [open, setopen] = useState(false)

  return (
    <div>
      <Sidebar open={open} setopen={setopen} />
      <header className='w-full px-11 h-[50px] bg-black flex items-center'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='h-[40px] w-[160px] relative'>
              <Link href={'/main'}>
                <Image
                  src={image}
                  alt='Logo Weguut'
                  layout='fill'
                  objectFit='contain'
                  className='cursor-pointer'
                />
              </Link>
            </div>
            <p className='uppercase text-white ml-12'>Change our future, 1 small action at time!</p>
          </div>
          <div className='flex items-center'>
            <a className='text-blue-700 border-2 py-[2px] px-3 mr-7 text-sm border-green-600 cursor-pointer duration-100 hover:border-green-400 hover:text-blue-500'>
              Join our Movement
            </a>

            <label className='px-2 py-1 bg-white flex items-center'>
              <input className='focus:border-0 outline-none bg-white' />
              <Image
                src='/images/common/search-icon.png'
                width={20}
                height={20}
                alt='Search Icon'
              />
            </label>
          </div>
        </div>
      </header>
    </div>
  )
}
