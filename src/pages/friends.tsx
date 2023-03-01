import Image from 'next/image'
import { useState } from 'react'
import Popup from '../Components/Popup/Popup'

export default function Friends() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Popup isOpen={isVisible} setIsOpen={setIsVisible} hideOnClickOverlay={false}>
      <>
        <Image src='/images/friends/FRIENDS PAGE POPUP.png' width={2211} height={3009} />
        <a href='https://friends.dugut.app/' target='_blank'>
          <img
            src='/images/main/Gobutton-1.webp'
            className='w-44 cursor-pointer hover:brightness-110 duration-100'
          />
        </a>
      </>
    </Popup>
  )
}
