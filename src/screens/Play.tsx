import { FC } from 'react'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import { games } from '../data/play.data'

const Play: FC = () => {
  return (
    <div className='w-full pt-16 pr-16'>
      <ActionSection className='flex-wrap' cardWrapperClasses='lg:gap-12 xl:!gap-14 flex-wrap'>
        {games.map(({ link, img }) => (
          <div className='w-wrap-card'>
            <ActionCard
              key={img}
              width='1'
              image={img}
              link={link}
              imgWidth={266}
              imgHeight={266}
              isShareRow={false}
            />
          </div>
        ))}
      </ActionSection>
    </div>
  )
}

export default Play
