import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardComponent from "./card";

export function MainComponent() {

  const ytlinks = [{ link: 'https://youtu.be/gTWKGpDi57c', img: '/images/Kids/yt1.webp', text: 'Barquito chiquitico' }, { link: 'https://youtu.be/5vG5Bo2XK-c', img: '/images/Kids/yt2.jpg', text: 'Si la tierra tierra fuera' }]

  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <div className="h-[300px] w-[350px]  lg:h-[350px] md:w-[600px] relative cursor-pointer md:mt-5 lg:mt-10">
        <Image
          src="/images/Kids/LogoKids.png"
          alt="Logo Weguut"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] mb-6 text-blue-pattern lg:mt-10">Stories</h1>
        <div className="flex justify-center flex-wrap items-center gap-3 lg:gap-4">

          <a href="https://elbarquitochiquitico.dugut.app/world-page/" target={'blank'}>

            <CardComponent
              image="/images/Kids/panel1.png"
              alt="Painel 1"
              href="#"
            />
          </a>

          <a href="https://aventurasdeunabotella.dugut.app/world-page/" target={'blank'}>

            <CardComponent
              image="/images/Kids/panel2.png"
              alt="Painel 2"
              href="#"
            />
          </a>
          <a href={'/journey'} >
            <CardComponent
              image="/images/journey/LOS.png"
              alt='check' />
          </a>

          <Link href={'play'}>


            <div className="flex justify-center items-center px-2 py-2  bg-purple-pattern rounded-lg relative cursor-pointer">
              <img
                src={'/images/action/GAMES.webp'}
                alt="Games"
                className="h-[250px] w-[150px] md:h-[350px] md:w-[200px] "
              />
            </div>

          </Link>


          {/* <Link href="/journey" target={'blank'}>

            <CardComponent
              image="/images/journey/LOS.png"
              alt="Painel 2"
              href="#"
              
              />
          </Link> */}



        </div>

        <div className="flex justify-center w-8/12 sm:w-10/12  md:w-10/12 md:justify-around lg:justify-center flex-wrap   mt-5 ">

          {ytlinks.map((x, idx) => (

            <div key={idx} className='sm:w-6/12 md:w-6/12  lg:w-4/12'>
              <a href={x.link} target={'_blank'} className='m-4 px-2 flex flex-col'>

                <div className="flex justify-center items-center px-2 py-2   bg-purple-pattern rounded-lg relative cursor-pointer">
                  <img src={x.img} alt="" className="hover:brightness-110 rounded-md"
                  />

                </div>

              </a>
              <p className="mt-3 text-sm text-white text-center md:text-2xl">{x.text}</p>
            </div>
          )
          )}







        </div>
      </div>
    </main>
  );
}
