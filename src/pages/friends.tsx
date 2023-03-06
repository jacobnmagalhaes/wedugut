import Image from 'next/image'
import { useState } from 'react'
import Popup from '../Components/Popup/Popup'

export default function Friends() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div className='w-[100vw] h-[100vh] hidden md:block'>
        <Image src={'/images/friends/SOCIAL PC.png'} layout='fill' alt='Social background image' />
      </div>
      <div className='w-[100vw] h-[100vh] md:hidden'>
        <Image
          src={'/images/friends/SOCIAL MOBILE.png'}
          layout='fill'
          alt='Social background image'
        />
      </div>
      <Popup isOpen={isVisible} setIsOpen={setIsVisible} hideOnClickOverlay={false}>
        <>
          <div className='md:w-[82%]'>
            <Image src='/images/friends/FRIENDS PAGE POPUP.png' width={1915} height={3009} />
          </div>
          <a href='https://friends.dugut.app/' target='_blank'>
            <img
              src='/images/main/Gobutton-1.webp'
              className='w-44 cursor-pointer hover:brightness-110 duration-100'
            />
          </a>
        </>
      </Popup>
    </>
  )
}
