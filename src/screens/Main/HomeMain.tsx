import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionCard from '../../Components/ActionCard/ActionCard'
import ActionSection from '../../Components/ActionSection/ActionSection'
import Video from '../../Components/Video/Video'
import {
  actionJourneyFirst,
  actionJourneysFifth,
  actionJourneysFourth,
  actionJourneysSecond,
  actionJourneysThird,
  featuredActionJourneys,
  kidsForKids,
  shortsVideos,
  youtubeVideos,
} from '../../data/main.data'
import { longSocialsIconLinks } from '../../data/socials.data'
import { setSearchTerm } from '../../redux/searchSlice'
import { getSearchedMainData } from '../../utils/getSearchedMainData'

const HomeMain: FC = () => {
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
            className='mb-12 md:mb-20'
            title='Featured action journeys'
            subtitle='Learn about issues and take action!'>
            {featuredActionJourneys.map(({ link, id, image, points, text }) => (
              <ActionCard
                key={id}
                image={image}
                points={points}
                text={text}
                link={link}
                imgWidth={400}
                imgHeight={300}
              />
            ))}
          </ActionSection>

          <ActionSection
            title='Action journeys'
            subtitle='Learn about issues and take action!'
            className='mb-12 md:mb-20'>
            {actionJourneyFirst.map(({ link, id, image, points, text }) => (
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
            title='Kids for kids'
            subtitle='Kids helping kids!'
            className='mb-12 md:mb-20'>
            <ActionCard
              image={kidsForKids.image}
              link={kidsForKids.link}
              width='1'
              imgHeight={240}
              imgWidth={800}
              isShareRow={false}
            />
          </ActionSection>

          <ActionSection
            title='Action journeys'
            subtitle='Learn about issues and take action!'
            className='mb-12 md:mb-20'>
            {actionJourneysSecond.map(({ link, id, image, points, text }) => (
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
            title='Shorts videos'
            subtitle='See what our volunteers have to say!'
            className='mb-12 md:mb-20'
            cardWrapperClasses='flex-wrap'>
            {shortsVideos.map(({ link, name, shareLink, shares }) => (
              <div key={link} className='w-wrap-card'>
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

          <ActionSection
            title='Action journeys'
            subtitle='Learn about issues and take action!'
            className='mb-12 md:mb-20'>
            {actionJourneysThird.map(({ link, id, image, points, text }) => (
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
            title='Long videos'
            subtitle='See the result of your Actions!'
            className='mb-12 md:mb-20'>
            {youtubeVideos.map(({ _id, link, text, name, shareLink }) => (
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
            title='Action journeys'
            subtitle='Learn about issues and take action!'
            className='mb-12 md:mb-20'>
            {actionJourneysFourth.map(({ link, id, image, points, text }) => (
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
            title='Shop & give'
            subtitle='Every purchase takes an action!'
            className='mb-12 md:mb-20'>
            <ActionCard
              image='/images/main/shop-image.png'
              link='https://friends.dugut.app/shop'
              width='1'
              imgHeight={240}
              imgWidth={800}
              isShareRow={false}
            />
          </ActionSection>

          <ActionSection
            title='Action journeys'
            subtitle='Learn about issues and take action!'
            className='mb-12 md:mb-20'>
            {actionJourneysFifth.map(({ link, id, image, points, text }) => (
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

          <ActionSection title='Just play mini games' subtitle='have fun and learn!'>
            <ActionCard
              image='/images/main/GAMES.png'
              link='/play'
              width='1'
              imgHeight={370}
              imgWidth={1000}
              isShareRow={false}
            />
          </ActionSection>
        </>
      ) : (
        <>
          <ActionSection
            title='Action and featured journeys'
            subtitle='Learn about issues and take action!'
            className='mb-12 md:mb-20'
            cardWrapperClasses='!flex-wrap'>
            {getSearchedMainData(searchTerm).journeys.length ? (
              getSearchedMainData(searchTerm).journeys.map(({ link, id, image, points, text }) => (
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
            title='Long videos'
            subtitle='See the result of your Actions!'
            className='mb-12 md:mb-20'>
            {getSearchedMainData(searchTerm).videos.length ? (
              getSearchedMainData(searchTerm).videos.map(({ _id, link, text, name, shareLink }) => (
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
              ))
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>

          <ActionSection
            title='Shorts videos'
            subtitle='See what our volunteers have to say!'
            className='mb-12 md:mb-20'
            cardWrapperClasses='flex-wrap'>
            {getSearchedMainData(searchTerm).shorts.length ? (
              getSearchedMainData(searchTerm).shorts.map(({ link, name, shareLink, shares }) => (
                <div key={link} className='w-wrap-card'>
                  <Video width='1' text={name} link={link} name={name} shareLink={shareLink} />
                  <div className='mt-2 ml-2 flex gap-4 items-center'>
                    {shares.map(({ icon, link }) => (
                      <a key={link} href={link} target={'blank'}>
                        <Image src={icon} width={24} height={24} />
                      </a>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>
        </>
      )}
    </div>
  )
}

export default HomeMain
