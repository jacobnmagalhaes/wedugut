import React, { useState } from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'
import LayoutComponent from '../Components/Layout'
import HomePageComponent from '../Components/Main/home'
import Popup from '../Components/Popup/Popup'
import SideBarMenu from '../Components/sidebar/SideBarMenu'
import HomeMain from '../screens/HomeMain'

export default function HomePage() {
  const [modalIsOpen, setmodalIsOpen] = useState(true)
  const [animation, setAnimation] = useState(true)

  function handleCloseModal() {
    setmodalIsOpen(() => false)
  }
  return (
    <>
      <Popup>
        <>
          <img src='/images/main/MAIN PAGE POPUP.png' />
          <p className='font-bold mb-4 text-sm md:text-base'>
            Help our volunteers to create a better future for all of us! All our content is created
            by people like you that want to become part of the solution!
          </p>
          <p className='text-sm md:text-base'>
            Go on a journey and learn about our most pressing issues and share your knowledge with
            your friends and family. <b>By engaging in a journey, you can take real-life actions</b>{' '}
            that are performed by our fast-growing army of volunteers. You need 500 points to redeem
            your Action Reward! Journeys with a star are the most active journeys.
            <b>
              {' '}
              Watch videos of our actions, we have already taken over 20.000 of them and we just
              started!
            </b>
          </p>

          <h3 className='uppercase text-center text-sm mt-9 mb-6'>Choose your action</h3>
          <div className='flex items-center relative gap-12 md:px-12'>
            <img className='w-24 lg:w-32' src='/images/main/Journey.png' />
            <div className='flex flex-col w-3/5'>
              <p className='text-sm mb-2'>
                Go on an action journey to learn about sustainable issues and solutions and take a
                real-live action! (+15 Minutes)
              </p>
              <img src='/images/main/Gobutton-1.webp' className='w-32 cursor-pointer' />
            </div>
          </div>

          <div className='flex items-center relative gap-12 md:px-12'>
            <img className='w-24 lg:w-32' src='/images/main/invite.png' />
            <div className='flex flex-col w-3/5'>
              <p className='text-sm mb-2'>
                Go on an action journey to learn about sustainable issues and solutions and take a
                real-live action! (+15 Minutes)
              </p>
              <img src='/images/main/Gobutton-1.webp' className='w-32 cursor-pointer' />
            </div>
          </div>

          <div className='flex items-center relative gap-12 md:px-12'>
            <img className='w-24 lg:w-32' src='/images/main/Newsletter.png' />
            <div className='flex flex-col w-3/5'>
              <p className='text-sm mb-2'>
                Go on an action journey to learn about sustainable issues and solutions and take a
                real-live action! (+15 Minutes)
              </p>
              <img src='/images/main/Gobutton-1.webp' className='w-32 cursor-pointer' />
            </div>
          </div>
        </>
      </Popup>
      <HeaderComponent image={'/images/homePage/Logo.webp'} />{' '}
      <div className='min-h-[100vh] flex'>
        <SideBarMenu />
        <HomeMain />
      </div>
      <FooterComponent />
    </>
  )
}
