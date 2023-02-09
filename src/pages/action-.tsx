import Script from "next/script";
import React, { useState } from "react";
import { FooterComponent } from "../Components/footer";
import { HeaderComponent } from "../Components/header";
import LayoutComponent from "../Components/Layout";
import ActionMain from "../Components/Main/action";


export default function ActionPage() {



    return (
        <>
            <HeaderComponent image={'/images/homePage/Logo.webp'} />
            {/* <div className="bg-action- bg-center bg-cover"> */}
            <div className="bg-gradient-to-t from-white to-[#0033cc]">

                <ActionMain />
                <FooterComponent />
            </div>

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
    )
}
