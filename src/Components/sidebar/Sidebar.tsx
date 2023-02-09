import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Sidebar({ open, setopen }: any) {

    const style = {

        transition: '0.3s all ease-in',
        transform: open ? 'translateY(0vh)' : 'translateY(-140vh)',
        zIndex: '5',
        // position: 'sticky',
        top: '0'
        // overflowX:'hidden'


    }
    // bg-gray-700



    let headerLinks = [

        { link: '', text: 'HOME', image: '/images/common/HOME_BUTTON.png' },
        { link: 'action-', text: 'ACTION', image: '/images/common/ACTION.png' },
        { link: 'friends', text: 'SOCIAL', image: '/images/common/FRIENDS.webp' },
        { link: 'kids', text: 'KIDS', image: '/images/common/KIDS.webp' },
        { link: 'shop', text: 'SHOP', image: '/images/common/SHOP_ICON.png' },
        { link: 'videoshack', text: 'VIDEOS', image: '/images/common/SHOP_ICON.png' },
        { link: 'donation', text: 'DONATE', image: '/images/common/SHOP_ICON.png' },
        { a: 1, link: 'http://company.wedugut.com', text: 'ABOUT US', image: '/images/common/SHOP_ICON.png' },
        { a: 1, link: 'mailto:business@dugut.app', text: 'CONTACT US', image: '/images/common/SHOP_ICON.png' },
        { a: 1, link: 'https://www.dugut.org', text: 'JOBS', image: '/images/common/SHOP_ICON.png' },
    ]



    return (
        <div style={style} className='sticky' >

            <div onClick={() => setopen(false)} className='bg-gray-700 h-screen opacity-25 absolute z-10 lg:w-4/6   '></div>

            <div className='bg-black px-2  text-white w-1/2 pt-10 fixed lg:w-2/6 md:px-16 md:pt-6 overflow-x-hidden absloute right-0 min-h-screen'  >


                {headerLinks.map((x, idx) => {



                    if (x.a) {
                        return (
                            <a key={idx} href={x.link} target={'blank'}>
                                <div className='flex my-2 items-center cursor-pointer '>
                                    <p className='  my-3 font-bold ml-[36px]  lg:ml-[5px] xl:ml-[108px] text-md md:text-lg'>{x.text}</p>
                                </div>
                            </a>
                        )
                    }

                    return (

                        <Link key={idx} href={"/" + x.link}  >

                            <div className='flex my-2 items-center cursor-pointer '>

                                {/* <Image src={x.image} height={80} width={80} /> */}
                                <p className='  my-3 font-bold ml-[36px] lg:ml-[5px] xl:ml-[108px] text-md md:text-lg'>{x.text}</p>
                            </div>
                        </Link>
                    )
                })
                }



                {/* <Link href="/action" >
                <Link href="/action-" >

                    <div className='flex my-2 items-center cursor-pointer '>

                        <Image src={'/images/common/ACTION.png'} height={80} width={80} />
                        <p className='ml-2 '>ACTION</p>
                    </div>
                </Link>


                {/* </Link> */}

                {/* <Link href="/friends" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/FRIENDS.webp'} height={80} width={80} />
                        <p className='ml-2'>SOCIAL</p>
                    </div>
                </Link> */}

                {/* <Link href="/dugutopia" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/DUGUTOPIA.png'} height={80} width={80} />
                        <p className='ml-2'>DUGUTOPIA</p>
                    </div>
                </Link> */}

                {/* <Link href="/kids" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/KIDS.webp'} height={80} width={80} />
                        <p className='ml-2'>KIDS</p>
                    </div>
                </Link> */}

                {/* <Link href="/nfts" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/NFT.webp'} height={80} width={80} />
                        <p className='ml-2'>NFTs</p>
                    </div>
                </Link> */}
                {/* 
                <Link href="/shop" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/SHOP_ICON.png'} height={80} width={80} />
                        <p className='ml-2'>SHOP</p>
                    </div>
                </Link>

                <Link href="/videoshack" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/SHOP_ICON.png'} height={80} width={80} />
                        <p className='ml-2'>VIDEOS</p>
                    </div>
                </Link>

                <Link href="/donation" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/SHOP_ICON.png'} height={80} width={80} />
                        <p className='ml-2'>DONATE</p>
                    </div>
                </Link> */}




                {/* 
                <div className='flex flex-col text-xs md:text-sm  justify-center w-3/4 text-md mx-4 mt-8 md:my-2  md:mt-4  '>

                    <div className='flex justify-around items-center w-[100%] '>
                        <Image className='w-[30%]' src={'/images/common/circle-fill.svg'} height={20} width={20} />

                        <div className='cursor-pointer w-[70%] '>
                            <a href="http://company.wedugut.com" target={'blank'}>
                                <p className='font-bold my-3 text-md md:text-lg'>ABOUT US</p>
                            </a>
                        </div>


                    </div>
                    <div className='flex justify-around items-center w-[100%] my-2  '>
                        <Image className='w-[30%]' src={'/images/common/circle-fill.svg'} height={20} width={20} />

                        <div className='cursor-pointer w-[70%] '>
                            <a href='mailto:business@dugut.app'>
                                <p className='font-bold my-3 text-md md:text-lg'>CONTACT US</p>
                            </a>
                        </div>


                    </div>
                    <div className='flex justify-around items-center w-[100%]'>
                        <Image className='w-[30%]' src={'/images/common/circle-fill.svg'} height={20} width={20} />

                        <div className='cursor-pointer w-[70%] '>
                            <a href='https://www.dugut.org' target={'blank'}>
                                <p className='font-bold my-3 text-md md:text-lg'>JOBS</p>
                            </a>
                        </div>


                    </div>


                </div> */}

                <div className='absolute bottom-0 w-5/6 lg:right-[5%]'>



                    <p className='text-center font-light mt-6 mb-2  md:w-3/4 md:mt-2 md:ml-8 '>Connect With us:</p>

                    {/* sm links */}
                    <div className='flex justify-around md:w-3/4 sm:w-5/6 m-auto  md:ml-8 '>
                        <div className='mx-1'>
                            <a href="https://www.facebook.com/wedugut/" target={'blank'}>

                                <Image src={'/images/common/facebook.svg'} height={15} width={15} />
                            </a>
                        </div>
                        <div className='mx-1'>
                            <a href="https://www.instagram.com/wedugut/" target={'blank'}>

                                <Image src={'/images/common/instagram.svg'} height={15} width={15} />
                            </a>
                        </div>
                        <div className='mx-1'>
                            <a href="https://twitter.com/wedugut" target={'blank'}>

                                <Image src={'/images/common/twitter.svg'} height={15} width={15} />
                            </a>
                        </div>
                        <div className='mx-1'>
                            <a href="https://www.tiktok.com/@wedugut" target={'blank'}>

                                <Image src={'/images/common/tiktok.svg'} height={15} width={15} />
                            </a>
                        </div>
                        <div className='mx-1'>
                            <a href="https://www.youtube.com/channel/UCyg87GirrddSvia8TqeWepA" target={'blank'}>

                                <Image src={'/images/common/youtube.svg'} height={15} width={15} />
                            </a>
                        </div>
                        <div className='mx-1'>
                            <a href="https://pt.linkedin.com/company/dugutapp" target={'blank'}>

                                <Image src={'/images/common/linkedin.svg'} height={15} width={15} />
                            </a>
                        </div>
                    </div>

                    <div className=' flex mt-2 mb-1 font-light justify-center text-xs md:flex md:justify-center md:w-3/4  md:ml-8'>

                        <a href="https://dugut.app/privacy/DuGut-Privacy-Policy.pdf" target={'blank'}>
                            <p className='mr-2 cursor-pointer'>Privacy</p>
                        </a>

                        <a href="https://dugut.app/data/DuGut-General-Data-Protection-Regulation.pdf" target={'blank'}>

                            <p className='mr-2 cursor-pointer'>GDPR</p>
                        </a>

                        <a href="https://dugut.app/terms/DuGut-Terms-of-Use.pdf" target={'blank'}>

                            <p className='mr-2 cursor-pointer'>Terms</p>
                        </a>

                    </div>

                    <div className=' flex justify-center mb-3  md:ml-8 md:w-3/4 ' style={{ fontSize: '9px' }}>
                        <p className='px-1'>DuGut <sup>TM</sup> LDA, 2022, All rights reserved </p>
                        <Image src={'/images/common/c-circle.svg'} height={10} width={10} />
                    </div>

                </div>
            </div>
        </div>
    )
}
