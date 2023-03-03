import Image from 'next/image'
import { FC } from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import ActionSection from '../Components/ActionSection/ActionSection'
import { activeDonationData, featuredDonationData } from '../data/donation.data'

const Donate: FC = () => {
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
            <div key={id} className='w-full md:w-1/2 relative'>
              <Image
                data-tooltip-id='coming-soon-tooltip'
                src={src}
                width={2120}
                height={1742}
                layout='responsive'
                className='cursor-pointer hover:brightness-110 '
              />
            </div>
          ))}
        </ActionSection>

        <ActionSection title='Featured causes' subtitle='Coming Soon!'>
          {activeDonationData.map(({ src }, id) => (
            <div key={id} className='w-wrap-card-action relative'>
              <Image
                data-tooltip-id='coming-soon-tooltip'
                src={src}
                width={1059}
                height={1742}
                layout='responsive'
                className='cursor-pointer hover:brightness-110 '
              />
            </div>
          ))}
        </ActionSection>
      </div>
      <Tooltip
        id='coming-soon-tooltip'
        place='top'
        noArrow
        className='!bg-white border border-gray-200 shadow-md !opacity-100'>
        <p className='text-xl text-black'>Coming soon!</p>
      </Tooltip>
    </>
  )
}

export default Donate
