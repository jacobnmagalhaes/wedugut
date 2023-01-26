import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Yt() {
    const router = useRouter()
    return (
        <div className='bg-[#f4f481]'>
            <div className=' min-h-screen  w-[100vw] flex flex-col justify-center items-center '>

                <div className='relative  '>

                    <img src="/images/yt/bg-2.png" className='w-11/12 lg:w-3/6 lg:h-5/6 m-auto my-5' alt="" />

                    <div className=''>

                        <Link href={'/videoshack-'}>
                            <img src="/images/yt/button.png" className='cursor-pointer m-auto h-20  ' alt="" />
                        </Link>
                    </div>
                    
                    <div className='mb-10'>
                        <a href="http://friends.dugut.app" >

                            <img src="/images/yt/connect.png" className='h-16 m-auto ' />
                        </a>
                    </div>
                    {/* <p className='absolute xl:top-[80vh] md:top-[47vh] top-[30vh] text-center font-bold xl:text-3xl left-[16vw] w-4/6 cursor-pointer text-white '>CONNECT!</p> */}

                </div>
            </div>
            <div className='bg-[#4617ab] h-16 w-full flex justify-center items-center'>
                <p className='text-white'>DuGut 2022, ALL right reserved &#169;</p>
            </div>
        </div>
    )
}
