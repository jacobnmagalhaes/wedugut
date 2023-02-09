import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { HeaderComponent } from '../Components/header'

export default function YtMain({ data }) {

    const [ytlinks, setytlinks] = useState([
        // { link: 'https://www.youtube.com/embed/oSIv-E60NiU', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi sequi autem? Doloribus placeat veniam illo repudiandae ab corrupti odit?' },

    ])



    useEffect(() => {

        setytlinks(data)

    }, [])

    // console.log(data)



    let store = useSelector((x) => x.store);

  
    return (
        <>


            <HeaderComponent image={'/images/homePage/Logo.webp'} />
            <div className=' bg-gradient-to-t from-white to-[#00cc66] w-[100vw] min-h-screen '>

                <div className='flex justify-center items-center'>
                    <Image
                        src={'/images/yt/logo.webp'}
                        height='400'
                        width='750'
                        className=''
                    />
                </div>

                <p className='text-center my-2'>  </p>
                <div className='flex flex-wrap justify-around xl:justify-center items-center  md:w-full lg:w-11/12 xl:w-7/12 m-auto pb-40 '>
                    {ytlinks.map(x => {

                        return <div className='flex flex-col p-5 md:w-5/12 m-5'>
                            <iframe width="370" height="225" src={`https://www.youtube.com/embed/${x.link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            <p className='my-3 w-full md:w-10/12'>{x.text}</p>
                        </div>
                    })}
                </div>





               
            </div>
            <div className='bg-[#4617ab] h-10 w-full flex justify-center items-center'>
                <p className='text-white'>DuGut 2022, ALL right reserved &#169;</p>
            </div>
        </>
    )
}


export async function getServerSideProps() {


    let { data } = await axios.get('https://updatedugutest-harish.vercel.app/api/getRecord')
    // console.log(data);
    return {
        props: {
            data
        }
    }



}