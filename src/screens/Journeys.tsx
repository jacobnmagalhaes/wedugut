import { FC } from 'react'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import { allActionJourneys, allFeaturedActionJourneys } from '../data/journeys.data'

const Journeys: FC = () => {
  return (
    <div className='w-full pb-20 pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
      <ActionSection
        title='Featured action journeys'
        subtitle='Learn about issues and take action!'
        className='mb-20'>
        {allFeaturedActionJourneys.map(({ link, id, image, points, text }) => (
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
        className='flex-wrap'
        cardWrapperClasses='!flex-wrap'>
        {allActionJourneys.map(({ id, name, link, points, image, text }) => (
          <div key={id} className='w-wrap-card-action'>
            <ActionCard
              width='1'
              image={image}
              points={points}
              text={text}
              link={link}
              imgWidth={285}
              imgHeight={468}
            />
          </div>
        ))}
      </ActionSection>
    </div>
  )
}

export default Journeys
