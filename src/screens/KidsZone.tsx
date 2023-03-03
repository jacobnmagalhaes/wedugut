import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import Video from '../Components/Video/Video'
import { kidsActionJourneysFirst, kidsShorts, kidsLongVideos } from '../data/kids.data'
import { longSocialsIconLinks } from '../data/socials.data'
import { setSearchTerm } from '../redux/searchSlice'
import { getSearchedKidsData } from '../utils/getSearchedKidsData'

const KidsZone: FC = () => {
  const searchTerm = useSelector((state: any) => state.search.searchTerm)
  const dispatch = useDispatch()

  useEffect(
    () => () => {
      dispatch(setSearchTerm(''))
    },
    [],
  )

  return (
    <div className='w-full pt-16 px-6 sm:px-8 md:pr-8 lg:pr-16'>
      {!searchTerm ? (
        <>
          <ActionSection className='mb-20'>
            <ActionCard
              image='/images/main/KIDS BANNER.png'
              link='/kids'
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

          <ActionSection
            className='mb-20'
            title='Long videos'
            subtitle='See result of your Actions!'>
            {kidsLongVideos.map(({ link, id, shareLink, name }) => (
              <div key={id} className='w-wrap-card-2'>
                <Video width='1' text={name} link={link} name={name} shareLink={shareLink} />
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
            {kidsShorts.map(({ link, id, name, shareLink, shares }) => (
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
            className='mb-20'
            title='Action journeys'
            subtitle='Learn about issues and take action!'>
            {getSearchedKidsData(searchTerm).journeys.length ? (
              getSearchedKidsData(searchTerm).journeys.map(({ link, id, image, points, text }) => (
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
              ))
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>

          <ActionSection
            className='mb-20'
            title='Long videos'
            subtitle='See result of your Actions!'>
            {getSearchedKidsData(searchTerm).videos.length ? (
              getSearchedKidsData(searchTerm).videos.map(({ link, id, shareLink, name }) => (
                <div key={id} className='w-wrap-card-2'>
                  <Video width='1' text={name} link={link} name={name} shareLink={shareLink} />
                  <div className='mt-2 ml-2 flex gap-4 items-center'>
                    {longSocialsIconLinks.map(({ name, imgSrc, link }) => (
                      <a key={name} href={link} target={'blank'}>
                        <Image src={imgSrc} width={24} height={24} />
                      </a>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>

          <ActionSection
            className='flex-wrap'
            cardWrapperClasses='lg:gap-12 xl:!gap-14 !flex-wrap'
            title='Short videos'
            subtitle='See what our volunteers have to say!'>
            {getSearchedKidsData(searchTerm).shorts.length ? (
              getSearchedKidsData(searchTerm).shorts.map(
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

export default KidsZone