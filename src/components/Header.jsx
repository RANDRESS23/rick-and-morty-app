import logoBanner from '../assets/logo-banner.svg'
import { BiMoon, BiSun } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <div className='fixed w-full bg-light-primary h-14 shadow-lg shadow-light-blue-secondary'>
      <header className='container m-auto px-20 flex justify-between items-center h-full'>
        <Link to='/'>
          <img src={logoBanner} alt='Rick and Morty | logo' className='w-24' />
        </Link>
        <ul className='flex justify-center items-center gap-6'>
          <li>
            <p className='text-lg text-light-button-primary bg-light-blue-secondary px-4 py-1 rounded font-semibold cursor-default'>Home</p>
          </li>
          <li className='text-3xl text-light-button-primary pb-2'>|</li>
          <li>
            <a href='#'>
              <BiSun className='w-7 h-7 text-light-blue-primary hover:text-light-button-primary transition-all' />
              {/* <BiMoon className='w-7 h-7 text-light-button-primary' /> */}
            </a>
          </li>
          <li>
            <a href='#'>
              <AiFillGithub className='w-7 h-7 text-light-button-primary hover:text-light-blue-primary transition-all' />
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}
