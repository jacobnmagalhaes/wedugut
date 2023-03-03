import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { sidebarAdditionalLinks, sidebarNavItems, sidebarSocialIcons } from './SideBarMenu.data'

interface IProps {
  open?: boolean
  setIsOpenPopup?: (b: boolean) => void
}

const SideBarMenu: FC<IProps> = ({ open, setIsOpenPopup }) => {
  return (
    <div
      className={cn(
        'bg-white pt-0 md:pt-16 pb-24 pl-10 pr-6 w-52 min-w-[200px] h-full hidden md:block shadow-2xl sticky top-0 left-0',
        {
          ['!block']: open,
        },
      )}>
      <div className='sticky top-0 left-0 pt-6 md:pt-0'>
        <a
          onClick={() => setIsOpenPopup && setIsOpenPopup(true)}
          className='text-blue-700 border-2 py-1 md:hidden px-1 text-base border-green-600 cursor-pointer duration-100 hover:border-green-400 hover:text-blue-500'>
          Take action now
        </a>
        <nav className='mt-4 md:mt-0'>
          <ul className='pb-4 md:pb-8 border-b-2 border-gray-400'>
            {sidebarNavItems.map(({ id, title, link, iconSrc }) => (
              <Link key={id + title} href={link}>
                <li className='uppercase text-base mb-4 last-of-type:mb-0 cursor-pointer flex items-center'>
                  <div className='w-8 flex justify-center items-center'>
                    <img
                      src={iconSrc}
                      alt={`${title} icon`}
                      className={cn({
                        'h-9': id === 1,
                      })}
                    />
                  </div>
                  <span className='ml-3 text-gray-600'>{title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className='py-4 md:py-8 border-b-2 border-gray-400'>
          <h3 className='mb-4 md:mb-8 text-lg font-semibold text-center'>Connect</h3>
          <div className='flex flex-wrap gap-4'>
            {sidebarSocialIcons.map(({ link, iconSrc, id, alt }) => (
              <a key={id + link} href={link} target='_blank'>
                <img
                  src={iconSrc}
                  alt={alt}
                  className='cursor-pointer w-[35px] h-[35px] md:w-[50px] md:h-[50px]'
                />
              </a>
            ))}
          </div>
        </div>

        <ul className='mt-8'>
          {sidebarAdditionalLinks.map(({ id, title, link }) => (
            <a key={id} href={link} target='_blank'>
              <li className='uppercase text-base mb-4 last-of-type:mb-0 cursor-pointer text-gray-600'>
                {title}
              </li>
            </a>
          ))}
        </ul>

        <div className='flex flex-col mt-8 md:mt-16'>
          <a
            href='https://dugut.app/data/DuGut-General-Data-Protection-Regulation.pdf'
            className='font-semibold'>
            GDPR
          </a>
          <a href='https://dugut.app/terms/DuGut-Terms-of-Use.pdf' className='font-semibold'>
            Terms of use
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBarMenu
