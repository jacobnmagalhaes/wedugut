import Image from 'next/image'
import React from 'react'

export default function PLayComponent() {

    let games = [
        { link: 'https://dugut.app/game/2/', img: '/images/play/trees.png' },
        { link: 'https://dugut.app/game/3/', img: '/images/play/food.png' },
        { link: 'https://dugut.app/game/7/', img: '/images/play/animals.png' },
        { link: 'https://dugut.app/game/4/', img: '/images/play/water.png' },
        { link: 'https://dugut.app/game/10/', img: '/images/play/whales.png' },
        { link: 'https://dugut.app/game/1/', img: '/images/play/plastic.png' },
        { link: 'https://dugut.app/game/5/', img: '/images/play/game5.png' },
        { link: 'https://dugut.app/game/6/', img: '/images/play/game6.png' },
        { link: 'https://dugut.app/game/8/', img: '/images/play/game8.png' },
        { link: 'https://dugut.app/game/9/', img: '/images/play/game9.png' },
        { link: 'https://dugut.app/game/11/', img: '/images/play/game11.png' },
        { link: 'https://dugut.app/game/12/', img: '/images/play/game12.png' },

    ]


    return (
        <div>

            <div className=' flex justify-center items-center w-1/2 h-1/4 mx-auto'>

                <img className='h-60' src="/images/play/playgames.png" alt="" />
            </div>

            <div className="flex justify-center items-center flex-wrap animate-openMenu w-11/12 ">


                {games.map((x, idx) => (<a key={idx} href={x.link} target={'blank'}>

                    <div className="lg:flex w-[180px] h-[300px] lg:h-[280px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative mx-2">
                        <Image
                            src={x.img}
                            alt="trees"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>))}
               
            </div>


        </div>
    )
}
