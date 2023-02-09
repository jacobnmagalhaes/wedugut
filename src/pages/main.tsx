import React, { useState } from "react";
import { FooterComponent } from "../Components/footer";
import { HeaderComponent } from "../Components/header";
import LayoutComponent from "../Components/Layout";
import HomePageComponent from "../Components/Main/home";

export default function HomePage() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const [animation, setAnimation] = useState(true);

  function handleCloseModal() {
    setmodalIsOpen(() => false);
  }
  return (
    <>
      <HeaderComponent image={'/images/homePage/Logo.webp'} />
      {/* <div className="bg-mainbg bg-center bg-cover min-h-[100vh]"> */}
      <div className="bg-gradient-to-t from-white to-[#0033cc] min-h-[100vh]">

        <HomePageComponent />

        <FooterComponent /> 
      </div>
    </>
  );
}
