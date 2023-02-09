import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react'
import ActionModal from './modal';

export default function Action() {
    const router = useRouter();

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <div className="h-[300px] w-[350px]  lg:h-[350px] md:w-[600px] relative cursor-pointer md:mt-5">
                <Image
                    src="/images/action/actionpagetext.webp"
                    alt="Logo Weguut"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            {/* logos */}
            <div className="flex justify-center items-center flex-wrap animate-openMenu">


                <div className="w-[180px] h-[300px]  lg:h-[270px] lg:w-[220px] md:mt-2 cursor-pointer hover:brightness-110 relative">
                    <Image
                        src={"/images/action/ACTION.webp"}
                        alt="Action"
                        layout="fill"
                        objectFit="contain"
                        onClick={() => router.push('/takeaction')}
                    />
                </div>



                <Link href="/friends" >
                    <div className="w-[180px] h-[236px] lg:h-[270px] lg:w-[220px] md:mt-2 cursor-pointer hover:brightness-110 relative ">
                        <Image
                            src={"/images/action/friends.webp"}
                            alt="Friends"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>

                <Link href="/play">
                    <div className=" lg:flex w-[180px] h-[300px] lg:h-[270px] lg:w-[220px] md:mt-2 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
                        <Image
                            src={"/images/action/GAMES.webp"}
                            alt="Games"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>


                <Link href="/shop">

                    <div className="lg:flex w-[180px] h-[234px] lg:h-[270px] lg:w-[220px] lg:mt-2 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
                        <Image
                            src={"/images/action/SHOP_BUTTON.webp"}
                            alt="Shop Button"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>

                <Link href="/sdg" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[265px] lg:w-[220px] md:mt-2 cursor-pointer hover:brightness-110 relative">
                        <Image
                            src={"/images/action/SDGs.webp"}
                            alt="SDG"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>
                <Link href="/donation" target={'blank'}>
                    <div className="w-[180px] h-[215px] lg:h-[240px] lg:w-[215px] mt-6 md:mt-9  cursor-pointer hover:brightness-110 relative">
                        <Image
                            src={"/images/donation/donatebutton.webp"}
                            alt="SDG"
                            layout="fill"
                            objectFit="contain"
                        />

                        {/* <div className='relative bg-red-500 h-6 w-4/6 left-[18%] top-[15%]'>
                            <p className='text-white flex justify-center items-center'>Coming soon</p>
                        </div> */}
                    </div>
                </Link>
            </div>


            {/* images climate */}
            <div className='flex mt-8 flex-wrap justify-center'>
                <div className="mr-3 w-[180px] h-[300px] m-2 lg:h-[350px] lg:w-[220px] md:mt-2 cursor-pointer hover:brightness-110 relative">

                    <a href="https://climatechange.dugut.app/world-page/#" target={'blank'}>

                        <Image
                            src={"/images/action/CLIMATE.png"}
                            alt="Climate"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
                <div className="w-[180px] h-[300px] m-2 lg:h-[350px] lg:w-[220px] md:mt-2 cursor-pointer hover:brightness-110 relative">
                    <a href="https://plastic.dugut.app/world-page/#" target={'blank'}>

                        <Image
                            src={"/images/action/PLASTIC.png"}
                            alt="plastic"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
                <div className="w-[180px] h-[300px] md:mt-2 lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                    <a href="https://vou.dugut.app/world-page/" target={'blank'}>

                        <Image
                            src={"/images/action/PORTUGAL.png"}
                            alt="plastic"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
                {/* <div className="w-[180px] h-[300px] m-2 lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                    <a href="https://ukraineschools.dugut.app/world-page" target={'blank'}>

                        <Image
                            src={"/images/action/UKRAINE.png"}
                            alt="plastic"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div> */}
            </div>




        </div >
    );
}
