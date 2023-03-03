import Image from 'next/image'
import { FC } from 'react'
import { RWebShare } from 'react-web-share'
import ActionSection from '../Components/ActionSection/ActionSection'
import { activeDonationData, featuredDonationData } from '../data/donation.data'

const Donate: FC = () => {
  return (
    <div className='w-full pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
      <Image
        src='/images/donation/group-diversity-people-volunteen-arm-around.webp'
        width={2368}
        height={1486}
        layout='responsive'
      />
      <ActionSection title='Featured causes' subtitle='Coming Soon!' className='my-20'>
        {featuredDonationData.map(({ src }, id) => (
          <div key={id} className='w-full md:w-1/2 relative md:h-[250px] lg:h-[350px]'>
            <Image
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
          <div key={id} className='w-full sm:w-[49%] md:w-1/4 relative md:h-[250px] lg:h-[350px]'>
            <Image
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
  )
}

export default Donate
