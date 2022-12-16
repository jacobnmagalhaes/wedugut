import Image from 'next/image'
import React from 'react'

export default function Journey() {

    let imgs = [
        { src: '/images/journey/PlasticJourney.png', href: 'https://plastic.dugut.app/world-page/#',text:'More than 5 trillion pieces of plastic are already floating in our oceans. Learn about our plastic waste problem and how you can make a difference, at the end of the journey we will clean up ocean plastic in your name! ' ,},
        { src: '/images/journey/ClimateJourney.png', href: 'https://climatechange.dugut.app/world-page/#',text:'Droughts, wildfires, and extreme weather conditions are only going to increase as the planet heats up! Learn about our climate crisis and how you can make a difference, and at the end of the journey we will plant a tree in your name!' },
        // {src:'/images/journey/PORTUGAL.png',href:'https://vou.dugut.app/world-page/',text:'',head:'VOU Journey'},
        // {src:'/images/journey/UKRAINE.png',href:'https://ukraineschools.dugut.app/world-page',text:'Ukraine has lost enormous amounts of access to electricity and its affecting schools, orphanages and more. Help us provide them with access to renewable energy that will last them generations as they rebuild their country from these devastating attacks! ',head:'Ukraine Journey'},
        // {src:'/images/journey/CLEANWATER.png',href:' https://accesstowater.dugut.app/',text:'Help us provide clean water to those in need, follow this journey to learn more about how water scarcity is affecting millions of people worldwide and what we can do to help!',head:'Provide Access to Clean Water - With DUGUT'},
        // {src:'/images/journey/SAVEWATER.png',href:' https://wisa3.dugut.app/',text:'Water is Life, take this journey to learn about our global water scarcity issue and how you can help cut down at home! Once you finish we will help provide someone with access to water for life!',head:'Give Access to Drinking Water with WISA '},
        // {src:'/images/journey/APOCALYPS.png',href:'https://2050.dugut.app/',text:'You will not believe the state of the world we are headed towards, if we don’t fix something soon the world 2050 will look more like an apocalypse than you might think…this is what the experts are predicting.',head:'Apocalypse 2050'},
        // {src:'/images/journey/WILDLIFE.png',href:'https://wildlife.dugut.app/',text:'We must stop illegal wildlife trade, learn more through this informative journey and help support our brave rangers who are dying protecting endangered animals from poachers!',head:'Stop Wildlife Trade '},
        // {src:'/images/journey/WHALES.png',href:'https://savewhales.dugut.app/',text:' Whales way of living are constantly under threat from our actions, learn how we are affecting whales and what you can do to help. If you take action with this journey we will support whale conservation efforts globally!',head:'Save the Whales'},
        // {src:'/images/journey/GUN.png',href:'https://guncontrol.dugut.app/',text:'School shootings are a direct result of lack of gun control, learn more about this loaded political topic and the actions you can take to make a safer world.',head:'Gun Control and School Shootings'},
        // {src:'/images/journey/SANITATION.png',href:'https://wisa2.dugut.app/',text:'Help provide clean sanitation with WISA. Access to sanitation services is vital for our health, find out through this journey how many people do not have access and what a vital role proper sanitation plays against fighting disease!',head:'Take Action with Wisa!'},
        // {src:'/images/journey/HUNGER.png',href:'https://stopworldhunger.dugut.app/',text:'World hunger is a solvable problem, learn some of the facts and figures and when you finish this journey we will feed a person in need in your name! ',head:'Stop World Hunger'},
        // {src:'/images/journey/MENTAL.png',href:'https://mentalhealth.dugut.app/',text:'Mental health issues affect us all, and we must become more conscious of these affects among our peers, friends and family. Learn more about some of these issues through our journey and take action to help support those in need! ',head:'Mental Health'},
        // {src:'/images/journey/LGBTQ.png',href:'https://pride.dugut.app/',text:'',head:'Celebrate Pride: Love is Love'},
        // {src:'/images/journey/AMAZONE.png',href:'https://saveamazon.dugut.app/',text:'',head:'Save the Amazon'},
        // {src:'/images/journey/BULLYING.png',href:'https://cyberbullying.dugut.app/',text:'',head:'Stop Cyber Bullying'},
        // {src:'/images/journey/.REFUGGEE.png',href:'https://refugeecrisis.dugut.app/',text:'',head:'Refugee Crisis'},
        // {src:'/images/journey/WIND.png',href:'https://renewableenergy.dugut.app/',text:'',head:'Wind Energy (General)'},
        // {src:'/images/journey/VIENTO.png',href:'https://viento.dugut.app/',text:'',head:'Viento Energia Renovável (Spanish)'},
        // {src:'/images/journey/LOS.png',href:'https://planttreekids.dugut.app/world-page ',text:'',head:'Kids Trees'},
        // {src:'/images/journey/EQUALITY.png',href:'https://diamond.dugut.app/ ',text:'Racial inequalities in our society affect everyone and its up to us to call it out when we see it! Take the journey and learn about some of the inequalities that many face in our society every day!',head:'Diamond Journey'},

    ]


    return (
        <>


            <div className=' w-screen min-h-screen bg-journey'>

                <div className=' flex justify-center items-center pt-10' >


                    <img className='h-60 px-3 md:p-0'
                        src={'/images/journey/takejourney.png'}

                    />

                </div>


                <div className='flex justify-center items-center w-full '>

                    {/* images  */}
                    <div className='flex flex-wrap m-3 items-center justify-center px-2 md:px-0 '>

                        {imgs.map((x, idx) => (
                            <div key={idx} className='flex m-10 mb-8'>


                                <a href={x.href} target={'blank'}>

                                    <Image
                                        src={x.src}
                                        height='350'
                                        width='200'
                                        className='cursor-pointer hover:brightness-110 '

                                    />
                                </a>

                                <div className='flex flex-col w-52 mx-2 text-white justify-center items-center'>
                                    {/* <p className='text-md md:text-2xl text-center'>{x.head?x.head : ''}</p> */}
                                    <p className='text-left my-1 ml-5 text-xs md:text-sm'>{x.text}</p>

                                    <a href={x.href} target={'blank'} className='mt-3 hover:brightness-110'>

                                        <Image src='/images/takeaction/GOButton.png'
                                            height='75'
                                            width='180'
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div>

                    </div>


                </div>

            </div>
        </>
    )
}
