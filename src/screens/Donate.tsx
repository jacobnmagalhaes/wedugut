import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import ActionSection from '../Components/ActionSection/ActionSection'
import { activeDonationData, featuredDonationData } from '../data/donation.data'

const Donate: FC = () => {
  const [clickedSrc, setClickedSrc] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickedSrc('')
    }, 750)

    return () => {
      clearTimeout(timer)
    }
  }, [clickedSrc])

  return (
    <>
      <div className='w-full pb-20 pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
        <Image
          src='/images/donation/group-diversity-people-volunteen-arm-around.webp'
          width={2368}
          height={1486}
          layout='responsive'
        />
        <ActionSection title='Featured causes' subtitle='Coming Soon!' className='my-20'>
          {featuredDonationData.map(({ src }, id) => (
            <div key={id} className='w-full md:w-1/2 relative' onClick={() => setClickedSrc(src)}>
              <Image
                data-tooltip-id='coming-soon-tooltip'
                src={src}
                width={2120}
                height={1742}
                layout='responsive'
                className='cursor-pointer hover:brightness-110 '
              />
              {clickedSrc === src && (
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-red-400 font-semibold text-xl text-white'>
                  Coming soon!
                </p>
              )}
            </div>
          ))}
        </ActionSection>

        <ActionSection title='Featured causes' subtitle='Coming Soon!'>
          {activeDonationData.map(({ src }, id) => (
            <div
              key={id}
              className='w-wrap-card-action relative'
              onClick={() => setClickedSrc(src)}>
              <Image
                data-tooltip-id='coming-soon-tooltip'
                src={src}
                width={1059}
                height={1742}
                layout='responsive'
                className='cursor-pointer hover:brightness-110 '
              />
              {clickedSrc === src && (
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2 bg-red-400 font-semibold text-xl text-white'>
                  Coming soon!
                </p>
              )}
            </div>
          ))}
        </ActionSection>
      </div>
    </>
  )
}

export default Donate
