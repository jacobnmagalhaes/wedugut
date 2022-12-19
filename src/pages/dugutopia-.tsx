import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'

export default function DigutopiaMain() {

    const [width, setwidth] = useState<Number>(451)
    const style = {
        backgroundImage: 'url("images/dugutopia/bg.png")'
    }

    useEffect(() => {

        setwidth(window.innerWidth)
    },)



    let cardImage = [
        {
            src: "/images/dugutopia/card1.png",
            link: ''
        },
        {
            src: "/images/dugutopia/card2.png",
            link: 'https://www.dugutopia.com'
        }
    ]


    // 450
    if (width < 1025) {
        return (
            <div style={{ backgroundImage: 'url("/images/dugutopia/bgmobile.png")' }} className='bg-no-repeat bg-cover h-[100vh] '>

                <HeaderComponent image={'/images/dugutopia/Header.png'} />

                <div className='p-10 sm:p-36 h-[70vh]'>

                    <img
                        src='/images/dugutopia/mobilecard.png'
                        alt=""
                        className='w-11/12'

                    />

                    <div className=' -mt-16  flex justify-center '>

                        <Link href={'/'}>
                            <Image
                                src='/images/dugutopia/goback.png'
                                alt=""
                                height={33}
                                width={150}
                                className='cursor-pointer hover:brightness-110 '

                            />
                        </Link>
                    </div>
                </div>

                <div className=' w-full fixed bottom-0'>

                    <FooterComponent />

                </div>


            </div>
        )
    }


    return (
        <div style={style} className='bg-no-repeat h-screen bg-cover'>

            <HeaderComponent image={'/images/dugutopia/Header.png'} />


            <div className='flex justify-center items-center h-40 '>
                <Image
                    src={'/images/dugutopia/Logo.png'}
                    height={150}
                    width={400}
                />
            </div>


            <div className='flex flex-wrap w-full  justify-center md:mt-16 lg:mt-10  '>

                {cardImage.map((x, idx) => (

                    <div key={idx} className='p-2 mx-2 '>

                        <a href={x.link} target='blank'>

                            <Image
                                src={x.src}
                                alt=""
                                height={350}
                                width={250}

                            />
                        </a>
                    </div>
                ))}

            </div>


        </div>
    )
}
