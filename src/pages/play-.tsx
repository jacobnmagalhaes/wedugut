import Script from "next/script";
import React, { useState } from "react";
import LayoutComponent from "../Components/Layout";
import PLayComponent from "../Components/Main/play";
export default function Play() {
    return (
        <>
            <LayoutComponent>

                <PLayComponent />

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
    )
}
