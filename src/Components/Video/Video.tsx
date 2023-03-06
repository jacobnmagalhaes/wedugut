import Image from 'next/image'
import { FC } from 'react'
import { RWebShare } from 'react-web-share'
import cn from 'classnames'

interface IProps {
  width?: '1' | '1/2' | '1/4'
  link: string
  text: string
  name: string
  shareLink: string
}

const Video: FC<IProps> = ({ width = '1/2', link, name, text, shareLink }) => {
  return (
    <div
      className={cn({
        'w-full': width === '1',
        'w-1/2': width === '1/2',
        'w-1/4': width === '1/4',
      })}>
      <div className={`flex justify-end items-center `}>
        <RWebShare
          data={{
            text: text,
            url: shareLink,
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

      <div>
        <iframe
          src={`https://www.youtube.com/embed/${link}`}
          width='100%'
          className='2xl:h-[450px] xl:h-[400px] lg:h-[350px] h-[300px]'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
      </div>
    </div>
  )
}

export default Video
