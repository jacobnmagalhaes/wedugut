import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionSection from '../Components/ActionSection/ActionSection'
import Video from '../Components/Video/Video'
import { longSocialsIconLinks } from '../data/socials.data'
import { videosHackLongsVideos, videosHackShorts } from '../data/videoshack.data'
import { setSearchTerm } from '../redux/searchSlice'
import { getSearchedVideosHack } from '../utils/getSearchedVideosHack'

const VideosHack: FC = () => {
  const searchTerm = useSelector((state: any) => state.search.searchTerm)
  const dispatch = useDispatch()

  useEffect(
    () => () => {
      dispatch(setSearchTerm(''))
    },
    [],
  )

  return (
    <div className='w-full pb-10 md:pb-20 pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
      {!searchTerm ? (
        <>
          <ActionSection
            title='Long videos'
            subtitle='See the result of your Actions!'
            className='mb-20 flex-wrap'
            cardWrapperClasses='lg:gap-12 xl:!gap-14 !flex-wrap'>
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
            cardWrapperClasses='lg:gap-12 xl:!gap-14 !flex-wrap'
            title='Short videos'
            subtitle='See what our volunteers have to say!'>
            {videosHackShorts.map(({ link, id, name, shareLink, shares }) => (
              <div key={id} className='w-wrap-card'>
                <Video width='1' text={name} link={link} name={name} shareLink={shareLink} />
                <div className='mt-2 ml-2 flex gap-4 items-center'>
                  {shares.map(({ icon, link }) => (
                    <a key={link} href={link} target={'blank'}>
                      <Image src={icon} width={24} height={24} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </ActionSection>
        </>
      ) : (
        <>
          <ActionSection
            title='Long videos'
            subtitle='See the result of your Actions!'
            className='mb-20 flex-wrap'
            cardWrapperClasses='lg:gap-12 xl:!gap-14 !flex-wrap'>
            {getSearchedVideosHack(searchTerm).videos.length ? (
              getSearchedVideosHack(searchTerm).videos.map(
                ({ _id, link, text, name, shareLink }) => (
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
                ),
              )
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>

          <ActionSection
            className='flex-wrap'
            cardWrapperClasses='lg:gap-12 xl:!gap-14 !flex-wrap'
            title='Short videos'
            subtitle='See what our volunteers have to say!'>
            {getSearchedVideosHack(searchTerm).shorts.length ? (
              getSearchedVideosHack(searchTerm).shorts.map(
                ({ link, id, name, shareLink, shares }) => (
                  <div key={id} className='w-wrap-card'>
                    <Video width='1' text={name} link={link} name={name} shareLink={shareLink} />
                    <div className='mt-2 ml-2 flex gap-4 items-center'>
                      {shares.map(({ icon, link }) => (
                        <a key={link} href={link} target={'blank'}>
                          <Image src={icon} width={24} height={24} />
                        </a>
                      ))}
                    </div>
                  </div>
                ),
              )
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>
        </>
      )}
    </div>
  )
}

export default VideosHack
