import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardComponent from "./card";

export function MainComponent() {

  const ytlinks = [{ link: 'https://youtu.be/gTWKGpDi57c', img: '/images/Kids/yt1.jpg', text: 'Barquito chiquitico' }, { link: 'https://youtu.be/5vG5Bo2XK-c', img: '/images/Kids/yt2.jpg', text: 'Si la tierra tierra fuera' }]

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


          <Link href={'play'}>


            <div className="flex justify-center items-center px-2 py-2  bg-purple-pattern rounded-lg relative cursor-pointer">
              <img
                src={'/images/action/GAMES.webp'}
                alt="Games"
                className="h-[250px] w-[150px] md:h-[350px] md:w-[200px]"
              />
            </div>

          </Link>




        </div>

        <h1 className="text-[30px] mb-6 text-blue-pattern lg:mt-10">Links</h1>
        <div className="flex justify-center flex-wrap">

          



          
            
            
            
        </div>
      </div>
    </main>
  );
}
