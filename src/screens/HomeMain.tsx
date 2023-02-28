import Image from 'next/image'
import { FC } from 'react'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import Popup from '../Components/Popup/Popup'
import Video from '../Components/Video/Video'
import {
  actionJourneyFirst,
  actionJourneysFifth,
  actionJourneysFourth,
  actionJourneysSecond,
  actionJourneysThird,
  featuredActionJourneys,
  kidsForKids,
  youtubeVideos,
} from '../data/main.data'

const HomeMain: FC = () => {
  return (
    <div className='w-full pt-16 pr-16'>
      <ActionSection
        className='mb-20'
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
        className='mb-20'>
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

      <ActionSection title='Kids for kids' subtitle='Kids helping kids!' className='mb-20'>
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
        className='mb-20'>
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
        title='Action journeys'
        subtitle='Learn about issues and take action!'
        className='mb-20'>
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
        className='mb-20'>
        {youtubeVideos.map(({ _id, link, text, name, shareLink }) => (
          <Video key={_id} width='1/2' text={text} link={link} name={name} shareLink={shareLink} />
        ))}
      </ActionSection>

      <ActionSection
        title='Action journeys'
        subtitle='Learn about issues and take action!'
        className='mb-20'>
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
        className='mb-20'>
        <ActionCard
          image='/images/main/SHOP.png'
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
        className='mb-20'>
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
          image='/images/main/Games.png'
          link='/play-'
          width='1'
          imgHeight={295}
          imgWidth={800}
          isShareRow={false}
        />
      </ActionSection>
    </div>
  )
}

export default HomeMain