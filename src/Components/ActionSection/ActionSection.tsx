import { FC, ReactNode } from 'react'

interface IProps {
  title: string
  subtitle: string
  className?: string
  children: ReactNode
}

const ActionSection: FC<IProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={className}>
      <div className='flex mb-4'>
        <h2 className='uppercase text-xl font-bold'>{title}</h2>
        <p className='ml-8 italic text-xl'>{subtitle}</p>
      </div>
      <div className='flex gap-4'>{children}</div>
    </div>
  )
}

export default ActionSection
