import Image from 'next/image'
import { FC } from 'react'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import Video from '../Components/Video/Video'
import { kidsActionJourneysFirst, kidsShorts, kidsLongVideos } from '../data/kids.data'
import { shortsSocialsIconLinks } from '../data/socials.data'

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
        {kidsShorts.map(({ link, id, name, shareLink }) => (
          <div key={id} className='w-wrap-card'>
            <Video width='1' text={name} link={link} name={name} shareLink={shareLink} />
            <div className='mt-2 ml-2 flex gap-4 items-center'>
              {shortsSocialsIconLinks.map(({ name, imgSrc, link }) => (
                <a key={name} href={link} target={'blank'}>
                  <Image src={imgSrc} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </ActionSection>
    </div>
  )
}

export default KidsZone
