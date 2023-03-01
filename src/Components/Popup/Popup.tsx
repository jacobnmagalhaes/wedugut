import { FC, ReactNode, useRef, useState } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'

interface IProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (b: boolean) => void
  hideOnClickOverlay?: boolean
}

const Popup: FC<IProps> = ({ children, isOpen, setIsOpen, hideOnClickOverlay = true }) => {
  const ref = useRef(null)

  useOutsideClick(ref, () => hideOnClickOverlay && setIsOpen(false))

  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full z-20'>
          <div className='bg-black opacity-70 w-full h-full'></div>
          <div
            ref={ref}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 popup max-w-2xl z-30 flex flex-col items-center justify-center text-white'>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
