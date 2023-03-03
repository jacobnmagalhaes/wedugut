import Image from 'next/image'
import { FC } from 'react'
import cn from 'classnames'
import { RWebShare } from 'react-web-share'

interface IProps {
  width?: '1' | '1/2' | '1/4' | '1/4-wrap'
  link: string
  image: string
  points?: number
  text?: string
  imgWidth: number
  imgHeight: number
  isShareRow?: boolean
}

const ActionCard: FC<IProps> = ({
  width = '1/2',
  link,
  image,
  points,
  text,
  imgWidth,
  imgHeight,
  isShareRow = true,
}) => {
  return (
    <div
      className={cn(
        {
          'w-full': width === '1',
          'w-full md:w-1/2': width === '1/2',
          'w-[48%] sm:w-[49%] md:w-1/4': width === '1/4',
          'w-wrap-card': width === '1/4-wrap',
        },
        'mb-6 sm:mb-0',
      )}>
      {isShareRow && (
        <div className={`flex ${points ? 'justify-between' : 'justify-end'} items-center `}>
          {points && (
            <h2 className='text-xl text-green-400'>
              <span className='font-bold'>{points}</span>pts
            </h2>
          )}
          <RWebShare
            data={{
              text: `Join us in taking action, when you finish this journey you will unlock a sponsored donation for a specific sustainable action, Let's be part of the solution together:`,
              url: `${link}`,
              title: text,
            }}>
            <Image
              src='/images/main/share-icon.png'
              className='cursor-pointer'
              width={32}
              height={32}
              unoptimized
            />
          </RWebShare>
        </div>
      )}
      <div className='relative'>
        <a href={link} target='_blank'>
          <Image
            src={image}
            width={imgWidth}
            height={imgHeight}
            layout='responsive'
            className='cursor-pointer'
          />
        </a>
      </div>
      {text && (
        <p className='mt-1'>
          <span className='font-bold'>Action:</span> {text}
        </p>
      )}
    </div>
  )
}

export default ActionCard
