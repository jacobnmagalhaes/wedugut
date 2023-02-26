import Image from 'next/image'
import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'

interface IProps {
  width?: '1' | '1/2' | '1/4'
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
      className={cn({
        'w-full': width === '1',
        'w-1/2': width === '1/2',
        'w-1/4': width === '1/4',
      })}>
      {isShareRow && (
        <div className={`flex ${points ? 'justify-between' : 'justify-end'} items-center `}>
          {points && (
            <h2 className='text-base text-green-400'>
              <span className='font-bold'>{points}</span>pts
            </h2>
          )}
          <Image
            src='/images/main/share-icon.png'
            className='cursor-pointer'
            width={32}
            height={32}
            unoptimized
          />
        </div>
      )}
      <div className='relative'>
        <Link href={link}>
          <Image
            src={image}
            width={imgWidth}
            height={imgHeight}
            layout='responsive'
            className='cursor-pointer'
          />
        </Link>
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
