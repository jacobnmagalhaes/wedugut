import Image from 'next/image'
import { FC } from 'react'
import { RWebShare } from 'react-web-share'
import ActionSection from '../Components/ActionSection/ActionSection'
import { donationData } from '../data/donation.data'

const Donate: FC = () => {
  return (
    <div className='w-full pt-16 pr-16'>
      <Image
        src='/images/donation/group-diversity-people-volunteen-arm-around.webp'
        width={2368}
        height={1486}
        layout='responsive'
      />
      <div className='flex flex-col lg:flex-row mt-16 justify-center'>
        {donationData.map(({ head, href, text, src }, id) => (
          <div key={id} className='flex m-5 mb-8 items-start'>
            <a href={href} target={'blank'} className='relative'>
              <Image
                src={src}
                height='285'
                width='300'
                className='cursor-pointer hover:brightness-110 '
              />
              <div className='absolute bg-red-500 h-6 w-5/6 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-white flex justify-center items-center'>Coming soon</p>
              </div>
            </a>

            <div className='flex flex-col w-60 mx-2 items-center'>
              <p className='text-left my-1 ml-5 text-xs md:text-sm'>{text}</p>

              <a href={href} target={'blank'} className='mt-3 hover:brightness-110'>
                <Image src='/images/donation/button.png' height='75' width='180' />
              </a>

              <RWebShare
                data={{
                  text: head,
                  url: `${href}`,
                  title: head,
                }}>
                <Image
                  src={'/images/donation/share.webp'}
                  height={50}
                  width={150}
                  className='cursor-pointer hover:brightness-110'
                />
              </RWebShare>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Donate
