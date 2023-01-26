import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function HomePageComponent() {
  const router = useRouter();




  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-[2.2rem] lg:text-[3.3rem] w-[95%] tracking-wide text-white text-center mt-[3rem] lg:w-[600px]">
        CHANGE YOUR FUTURE
        <p> 1 MICRO-ACTION  </p>
        AT A TIME!
      </h1>
      <div className="flex justify-center items-center flex-wrap animate-openMenu">


        <div className="-mt-8 w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
          <Image
            src={"/images/homePage/action.webp"}
            alt="Action"
            layout="fill"
            objectFit="contain"

            onClick={() => router.push("/action")}
          />
        </div>




        <Link href='/friends'>

          <div className="-mt-8 w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
            <Image
              src={"/images/homePage/friends.webp"}
              alt="Friends"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        <div className="-mt-6 md:-mt-8 w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
          <Image
            src={"/images/homePage/kids.webp"}
            alt="Kids"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/kids")}
          />
        </div>

        <Link href='/donation'>
          <div className=" w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/donation/donatebutton.png"}
              alt="Dugotopia"
              layout="fill"
              objectFit="contain"

            />
            <div className='relative bg-red-500 h-6 w-4/6 left-[18%] top-[15%]'>
              <p className='text-white flex justify-center items-center'>Coming soon</p>
            </div>
          </div>
        </Link>




        <Link href='/videoshack'>
          <div className="  lg:flex w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/videoshack.png"}
              alt="Nft"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        <Link href='/shop'>
          <div className="mb-5 md:mb-10 lg:flex w-[180px] h-[300px] lg:h-[300px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/SHOP_BUTTON.webp"}
              alt="Shop Button"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

      </div>
    </div >
  );
}
