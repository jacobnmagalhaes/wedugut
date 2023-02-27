import Image from 'next/image'
import { FC } from 'react'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import {
  kidsActionJourneysFirst,
  kidsFeaturedActionJourneys,
  kidsLongVideos,
} from '../data/kids.data'

const KidsZone: FC = () => {
  return (
    <div className='w-full pt-16 pr-16'>
      <ActionSection className='mb-20'>
        <ActionCard
          image='/images/main/KIDS BANNER.png'
          link='/'
          width='1'
          imgHeight={240}
          imgWidth={800}
          isShareRow={false}
        />
      </ActionSection>

      <ActionSection
        className='mb-20'
        title='Action journeys'
        subtitle='Learn about issues and take action!'>
        {kidsActionJourneysFirst.map(({ link, id, image, points, text }) => (
          <ActionCard
            key={id}
            width='1/4'
            image={image}
            points={points}
            text={text}
            link={link}
            imgWidth={285}
            imgHeight={468}
          />
        ))}
      </ActionSection>

      <ActionSection className='mb-20' title='Long videos' subtitle='See result of your Actions!'>
        {kidsLongVideos.map(({ link, id, image }) => (
          <ActionCard
            key={id}
            width='1/2'
            image={image}
            link={link}
            imgWidth={400}
            imgHeight={236}
          />
        ))}
      </ActionSection>

      <ActionSection
        className='flex-wrap'
        cardWrapperClasses='lg:gap-12 xl:!gap-14 flex-wrap'
        title='Short videos'
        subtitle='See what our volunteers have to say!'>
        {kidsFeaturedActionJourneys.map(({ link, id, image }) => (
          <div className='w-wrap-card'>
            <ActionCard
              key={id}
              width='1'
              image={image}
              link={link}
              imgWidth={285}
              imgHeight={468}
            />
            <div className='mt-2 flex gap-4 items-center'>
              <a href='https://www.instagram.com/wedugut/' target={'blank'}>
                <Image src='/images/common/instagram.svg' width={24} height={24} />
              </a>
              <a href='https://www.tiktok.com/@wedugut' target={'blank'}>
                <Image src='/images/common/tiktok.svg' width={24} height={24} />
              </a>
              <a href='https://www.facebook.com/wedugut/' target={'blank'}>
                <Image src='/images/common/facebook.svg' width={24} height={24} />
              </a>
              <a href='https://www.youtube.com/channel/UCyg87GirrddSvia8TqeWepA' target={'blank'}>
                <Image src='/images/common/youtube.svg' width={24} height={24} />
              </a>
            </div>
          </div>
        ))}
      </ActionSection>
    </div>
  )
}

export default KidsZone
