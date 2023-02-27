import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { sidebarAdditionalLinks, sidebarNavItems, sidebarSocialIcons } from './SideBarMenu.data'

const SideBarMenu: FC = () => {
  return (
    <div className='bg-white py-24 pl-10 pr-6 w-52'>
      <nav>
        <ul className='pb-8 border-b-2 border-gray-400'>
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

      <div className='py-8 border-b-2 border-gray-400'>
        <h3 className='mb-8 text-lg font-semibold text-center'>Connect</h3>
        <div className='flex flex-wrap gap-4'>
          {sidebarSocialIcons.map(({ link, iconSrc, id, alt }) => (
            <Link key={id + link} href={link}>
              <img src={iconSrc} alt={alt} width={50} height={50} className='cursor-pointer' />
            </Link>
          ))}
        </div>
      </div>

      <ul className='mt-8'>
        {sidebarAdditionalLinks.map(({ id, title, link }) => (
          <Link key={id} href={link}>
            <li className='uppercase text-base mb-4 last-of-type:mb-0 cursor-pointer text-gray-600'>
              {title}
            </li>
          </Link>
        ))}
      </ul>

      <div className='flex flex-col mt-16'>
        <Link href='/gdpr'>
          <a className='font-semibold'>GDPR</a>
        </Link>
        <Link href='/terms-of-use'>
          <a className='font-semibold'>Terms of use</a>
        </Link>
      </div>
    </div>
  )
}

export default SideBarMenu
