import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionCard from '../Components/ActionCard/ActionCard'
import ActionSection from '../Components/ActionSection/ActionSection'
import { allActionJourneys, allFeaturedActionJourneys } from '../data/journeys.data'
import { setSearchTerm } from '../redux/searchSlice'
import { getSearchedJourneysData } from '../utils/getSearchedJourneysData'

const Journeys: FC = () => {
  const searchTerm = useSelector((state: any) => state.search.searchTerm)
  const dispatch = useDispatch()

  useEffect(
    () => () => {
      dispatch(setSearchTerm(''))
    },
    [],
  )

  return (
    <div className='w-full pb-20 pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
      {!searchTerm ? (
        <>
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
        </>
      ) : (
        <>
          <ActionSection
            title='Featured action journeys'
            subtitle='Learn about issues and take action!'
            className='mb-20'>
            {getSearchedJourneysData(searchTerm).featuredJourneys.length ? (
              getSearchedJourneysData(searchTerm).featuredJourneys.map(
                ({ link, id, image, points, text }) => (
                  <ActionCard
                    key={id}
                    image={image}
                    points={points}
                    text={text}
                    link={link}
                    imgWidth={400}
                    imgHeight={300}
                  />
                ),
              )
            ) : (
              <p className='text-lg'>Not find...&#128531;</p>
            )}
          </ActionSection>

          <ActionSection
            title='Action journeys'
            subtitle='Learn about issues and take action!'
            className='flex-wrap'
            cardWrapperClasses='!flex-wrap'>
            {getSearchedJourneysData(searchTerm).journeys.length ? (
              getSearchedJourneysData(searchTerm).journeys.map(
                ({ id, name, link, points, image, text }) => (
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

export default Journeys
