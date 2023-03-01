import Image from 'next/image'
import { FC } from 'react'
import ActionSection from '../Components/ActionSection/ActionSection'
import Video from '../Components/Video/Video'
import { longSocialsIconLinks, shortsSocialsIconLinks } from '../data/socials.data'
import { videosHackLongsVideos, videosHackShorts } from '../data/videoshack.data'

const VideosHack: FC = () => {
  return (
    <div className='w-full pt-16 pr-16'>
      <ActionSection
        title='Long videos'
        subtitle='See the result of your Actions!'
        className='mb-20 flex-wrap'
        cardWrapperClasses='lg:gap-12 xl:!gap-14 flex-wrap'>
        {videosHackLongsVideos.map(({ _id, link, text, name, shareLink }) => (
          <div key={_id} className='w-wrap-card-2'>
            <Video width='1' text={text} link={link} name={name} shareLink={shareLink} />
            <div className='mt-2 ml-2 flex gap-4 items-center'>
              {longSocialsIconLinks.map(({ name, imgSrc, link }) => (
                <a key={name} href={link} target={'blank'}>
                  <Image src={imgSrc} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </ActionSection>
      <ActionSection
        className='flex-wrap'
        cardWrapperClasses='lg:gap-12 xl:!gap-14 flex-wrap'
        title='Short videos'
        subtitle='See what our volunteers have to say!'>
        {videosHackShorts.map(({ link, id, name, shareLink }) => (
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

export default VideosHack
