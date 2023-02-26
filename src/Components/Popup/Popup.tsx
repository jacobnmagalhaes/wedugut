import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'

const Popup: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  useOutsideClick(ref, () => setIsVisible(false))

  return (
    <>
      {isVisible && (
        <div className='fixed top-0 left-0 w-full h-full z-20'>
          <div className='bg-black opacity-70 w-full h-full'></div>
          <div
            ref={ref}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl z-30 flex flex-col items-center justify-center text-white'>
            <img src='/images/main/MAIN PAGE POPUP.png' />
            <p className='font-bold mb-4'>
              Help our volunteers to create a better future for all of us! All our content is
              created by people like you that want to become part of the solution!
            </p>
            <p>
              Go on a journey and learn about our most pressing issues and share your knowledge with
              your friends and family.{' '}
              <b>By engaging in a journey, you can take real-life actions</b> that are performed by
              our fast-growing army of volunteers. You need 500 points to redeem your Action Reward!
              Journeys with a star are the most active journeys.
              <b>
                {' '}
                Watch videos of our actions, we have already taken over 20.000 of them and we just
                started!
              </b>
            </p>

            <h3 className='uppercase text-center text-sm my-10'>Choose your action</h3>
            <div className='flex items-center relative gap-12 px-12'>
              <img className='w-2/5' src='/images/main/Journey.png' />
              <div className='flex flex-col w-3/5'>
                <p className='text-sm mb-2'>
                  Go on an action journey to learn about sustainable issues and solutions and take a
                  real-live action! (+15 Minutes)
                </p>
                <img src='/images/main/Gobutton-1.webp' className='w-full cursor-pointer' />
              </div>
            </div>

            <div className='flex items-center relative gap-12 px-12'>
              <img className='w-2/5' src='/images/main/invite.png' />
              <div className='flex flex-col w-3/5'>
                <p className='text-sm mb-2'>
                  Go on an action journey to learn about sustainable issues and solutions and take a
                  real-live action! (+15 Minutes)
                </p>
                <img src='/images/main/Gobutton-1.webp' className='w-full cursor-pointer' />
              </div>
            </div>

            <div className='flex items-center relative gap-12 px-12'>
              <img className='w-2/5' src='/images/main/Newsletter.png' />
              <div className='flex flex-col w-3/5'>
                <p className='text-sm mb-2'>
                  Go on an action journey to learn about sustainable issues and solutions and take a
                  real-live action! (+15 Minutes)
                </p>
                <img src='/images/main/Gobutton-1.webp' className='w-full cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
