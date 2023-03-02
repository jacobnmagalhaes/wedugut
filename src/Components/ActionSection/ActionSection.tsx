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
          <h2 className='uppercase text-base md:text-xl font-bold w-'>{title}</h2>
          <p className='ml-8 italic text-base md:text-xl'>{subtitle}</p>
        </div>
      )}
      <div
        className={cn(
          ['flex gap-2 justify-between md:justify-start md:gap-4 flex-wrap md:flex-nowrap'],
          {
            [`${cardWrapperClasses}`]: cardWrapperClasses,
          },
        )}>
        {children}
      </div>
    </div>
  )
}

export default ActionSection
