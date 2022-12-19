import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react'
import ActionModal from './modal';

export default function Action() {
    const router = useRouter();

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <h1 style={{ color: '#97b229' }} className="text-[1.2rem] lg:text-[2rem] w-[95%] tracking-wide text-center mt-[3rem] lg:w-[600px]">
                Take Real-Life Micro Actions For Free!
            </h1>
            {/* logos */}
            <div className="flex justify-center items-center flex-wrap animate-openMenu">


                <div className="w-[180px] h-[300px]  lg:h-[270px] lg:w-[220px] lg:mt-2 cursor-pointer hover:brightness-110 relative">
                    <Image
                        src={"/images/action/ACTION.webp"}
                        alt="Action"
                        layout="fill"
                        objectFit="contain"
                        onClick={() => router.push('/takeaction')}
                    />
                </div>



                <Link href="/friends" >
                    <div className="w-[180px] h-[300px]  lg:h-[270px] lg:w-[220px] lg:mt-2 cursor-pointer hover:brightness-110 relative ">
                        <Image
                            src={"/images/action/friends.webp"}
                            alt="Friends"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>

                <Link href="/play">
                    <div className=" lg:flex w-[180px] h-[300px] lg:h-[270px] lg:w-[220px] lg:mt-2 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
                        <Image
                            src={"/images/action/GAMES.webp"}
                            alt="Games"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>


                <Link href="/shop">

                    <div className="lg:flex w-[180px] h-[300px] lg:h-[270px] lg:w-[220px] lg:mt-2 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
                        <Image
                            src={"/images/action/SHOP_BUTTON.webp"}
                            alt="Shop Button"
                            layout="fill"mx-2
                            objectFit="contain"
                        />
                    </div>
                </Link>

                <Link href="/sdg" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[265px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                        <Image
                            src={"/images/action/SDGs.webp"}
                            alt="SDG"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>
            </div>


            {/* images climate */}
            <div className='flex mt-8 flex-wrap justify-center'>
                <div className="mr-3 w-[180px] h-[300px] m-2 lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">

                    <a href="https://climatechange.dugut.app/world-page/#" target={'blank'}>

                        <Image
                            src={"/images/action/CLIMATE.png"}
                            alt="Climate"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
                <div className="w-[180px] h-[300px] m-2 lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                    <a href="https://plastic.dugut.app/world-page/#" target={'blank'}>

                        <Image
                            src={"/images/action/PLASTIC.png"}
                            alt="plastic"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
                <div className="w-[180px] h-[300px] m-2 lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
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
