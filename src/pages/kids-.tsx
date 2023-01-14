import type { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { HeaderComponent } from "../Components/header";
import LayoutComponent from "../Components/Layout";
import { MainComponent } from "../Components/Main/kids";
import { ModalComponent } from "../Components/modal";
import { Button } from "../Components/util/Button";

export default function KidsPage() {



  return (
    <>
      <LayoutComponent>

        <MainComponent />

      </LayoutComponent>
      
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-0GMXD0ECE2"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-0GMXD0ECE2');
        `,
        }}
      />
    </>
  );
}
