import { FC } from 'react'
import { sdgData } from '../data/sdg.data'

const Sdg: FC = () => {
  return (
    <div className='w-full pt-16 px-6 sm:px-8 md:pr-8 lg:pr-11'>
      {sdgData.map(({ head, image, body }) => (
        <div
          key={head}
          className='flex flex-col max-w-[1100px] md:flex-row mb-16 last-of-type:mb-0'>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className='min-w-[250px] h-[250px] bg-contain bg-center bg-no-repeat'></div>
          <div className='flex flex-col justify-center items-center mt-4 md:mt-0 md:ml-8'>
            <h3 className='font-semibold w-full text-sm md:text-xl'>{head}</h3>
            <p className='font-light md:text-left md:w-full md:text-lg'>{body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sdg
