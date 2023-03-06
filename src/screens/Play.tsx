import { FC } from 'react'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import { games } from '../data/play.data'

const Play: FC = () => {
  return (
    <div className='w-full pb-10 md:pb-20 pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
      <ActionSection className='flex-wrap' cardWrapperClasses='lg:gap-12v xl:!gap-14 !flex-wrap'>
        {games.map(({ link, img }) => (
          <div className='basis-[48%] md:basis-[21%]'>
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
