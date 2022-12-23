import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RWebShare } from 'react-web-share'

export default function TakeAction() {


    let imgs = [
        { src: '/images/takeaction/Journey.png', text: 'Go on a journey to learn about sustainable issue and solutions! (+15Minutes)', },
        { src: '/images/takeaction/Invite Friends.png', text: 'Invite 5 friends! (+1 Minute)' },
        { src: '/images/takeaction/Newsletter.png', text: 'Subscribe to our news letter! (Direct)' }
    ]

    return (

        <div className=' w-screen min-h-screen bg-[#0b3e14]'>


            <div className=' flex justify-center items-center pt-10' >


                <img className='h-60 px-8 md:p-0'
                    src={'images/takeaction/main .png'}

                />


            </div>

            <p className='text-center text-white text-2xl mb-8'>Choose your action!</p>

            <div className='flex flex-col items-center mx-1 px-2 md:px-0 '>


                <div className='flex mt-2 mb-8'>

                    <Image

                        src={imgs[0].src}
                        height='170'
                        width='250'


                    />

                    <div className='flex flex-col w-52 mx-3 text-white justify-center items-center'>
                        <p className=' my-1 ml-2 text-xs md:text-sm mb-2'>{imgs[0].text}</p>

                        <Link href='/journey' className='mt-8 -mb-8  '>

                            <Image src='/images/takeaction/GOButton.png'
                                height='75'
                                width='200'
                                className=' cursor-pointer hover:brightness-110 '

                            />
                        </Link>
                    </div>
                </div>


                <div className='flex mt-2 mb-8'>

                    <Image

                        src={imgs[1].src}
                        height='170'
                        width='250'

                    />

                    <div className='flex flex-col w-52 mx-3 text-white justify-center items-center'>
                        <p className=' mt-1 text-xs md:text-sm w-full ml-8'>
                        Share a sustainable journey with friends!
                        </p>
                        <p className='text-xs md:text-sm w-full ml-8 mb-2 '>
                            (+1 Minute)
                        </p>

                        <RWebShare
                            data={{
                                text:'Join us in helping young volunteers make a difference! / Junte-se a nós para ajudar os jovens voluntários a fazer a diferença em Portugal!',
                                url: "https://vou.dugut.app/world-page",
                                title: "Invite your friends",
                            }}
                            onClick={() => console.log("!")}

                        
                        >
                            <Image src='/images/takeaction/GOButton.png'
                                height='75'
                                width='200'
                                className='hover:brightness-110 cursor-pointer '
                            />

                        </RWebShare>

                    </div>
                </div>

                <div className='flex mt-2 mb-8'>

                    <Image

                        src={imgs[2].src}
                        height='170'
                        width='250'
                        className='cursor-pointer hover:brightness-110 '

                    />

                    <div className='flex flex-col w-52 mx-3 text-white justify-center items-center'>
                        <p className=' mt-1 ml-4 text-xs md:text-sm '>
                            Subscribe to our news letter!
                        </p>
                        <p className='text-xs md:text-sm text-left w-full ml-12'>
                            (Direct)
                        </p>

                        <a href="http://eepurl.com/hlZEQT" target={'blank'} className='mt-8 -mb-8 hover:brightness-110 cursor-pointer'>

                            <Image src='/images/takeaction/GOButton.png'
                                height='75'
                                width='200'

                            />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}
