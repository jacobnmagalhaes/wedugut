import { FC, ReactNode } from 'react'
import cn from 'classnames'

interface IProps {
  title?: string
  subtitle?: string
  className?: string
  children: ReactNode
  cardWrapperClasses?: string
}

const ActionSection: FC<IProps> = ({
  title,
  subtitle,
  children,
  className = '',
  cardWrapperClasses,
}) => {
  return (
    <div className={className}>
      {title && (
        <div className='flex mb-4'>
          <h2 className='uppercase text-xl font-bold w-'>{title}</h2>
          <p className='ml-8 italic text-xl'>{subtitle}</p>
        </div>
      )}
      <div
        className={cn(['flex gap-4'], {
          [`${cardWrapperClasses}`]: cardWrapperClasses,
        })}>
        {children}
      </div>
    </div>
  )
}

export default ActionSection
