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
      <Popup />
      <HeaderComponent image={'/images/homePage/Logo.webp'} />{' '}
      <div className='min-h-[100vh] flex'>
        <SideBarMenu />
        <HomeMain />
      </div>
      <FooterComponent />
    </>
  )
}
