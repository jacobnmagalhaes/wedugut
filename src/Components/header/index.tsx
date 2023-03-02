import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// component
import SideBarMenu from '../sidebar/SideBarMenu'

interface PropsHeader {
  image: string
}

export function HeaderComponent({ image }: PropsHeader) {
  const [open, setOpen] = useState(false)
  return (
    <div className='sticky top-0 z-50 md:z-auto md:relative md:top-auto'>
      {open && (
        <div className='absolute top-full left-0 z-40 h-[100vh]'>
          <SideBarMenu open={open} />
        </div>
      )}
      <header className='w-full px-2 sm:px-4 md:px-11 h-[50px] bg-black flex items-center'>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] relative cursor-pointer mr-4 md:hidden'>
          <Image
            src={'/images/Kids/Menu.png'}
            alt='Menu'
            layout='fill'
            objectFit='contain'
            style={{ zIndex: 10 }}
          />
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='h-[30px] w-[120px] sm:h-[40px] sm:w-[160px] relative'>
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
            <p className='uppercase text-white ml-12 hidden md:block'>
              Change our future, 1 small action at time!
            </p>
          </div>
          <div className='flex items-center'>
            <a className='text-blue-700 border-2 py-[2px] px-3 mr-7 hidden md:block text-sm border-green-600 cursor-pointer duration-100 hover:border-green-400 hover:text-blue-500'>
              Join our Movement
            </a>

            <label className='px-2 py-1 bg-white flex items-center'>
              <input className='w-32 sm:w-auto focus:border-0 outline-none bg-white' />
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
