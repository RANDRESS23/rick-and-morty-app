import { useState } from 'react'
import { BiMoon, BiSun, BiMenu } from 'react-icons/bi'
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useTheme } from 'next-themes'

export default function Header () {
  const [showNavBurger, setShowNavBurger] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className='fixed z-10 w-full bg-light-primary dark:bg-dark-primary h-14 shadow-lg shadow-light-green-secondary/30 dark:shadow-light-green-secondary/10 transition-all'>
      <header className='container m-auto px-8 sm:px-20 flex justify-between items-center h-full'>
        <Link to='/'>
          <img src='https://i.postimg.cc/L6GL3CxP/logo-banner-rick-and-morty.png' alt='Rick and Morty | logo' className='w-24' />
        </Link>
        <ul className='flex justify-center items-center gap-6'>
          <Link to='/' className='hidden lg:block bg-light-green-secondary dark:bg-dark-green-primary hover:opacity-70 transition-all px-4 py-1 rounded-md'>
            <li>
              <span className='text-lg text-color-text rounded font-semibold'>Home</span>
            </li>
          </Link>
          <li className='hidden lg:block text-3xl text-color-text dark:text-light-primary pb-2'>|</li>
          <li className='hidden lg:block'>
            {
              theme === 'dark'
                ? (
                  <button className='flex justify-center items-center' onClick={() => { setTheme('light') }}>
                    <BiSun className='w-7 h-7 text-dark-green-primary hover:text-light-primary transition-all' />
                  </button>
                  )
                : (
                  <button className='flex justify-center items-center' onClick={() => { setTheme('dark') }}>
                    <BiMoon className='w-7 h-7 text-light-green-primary hover:text-color-text transition-all' />
                  </button>
                  )
            }
          </li>
          <li className='hidden lg:block'>
            <a href='https://github.com/RANDRESS23/rick-and-morty-app' target='_blank' rel='noreferrer'>
              <AiFillGithub className='w-7 h-7 text-color-text dark:text-light-primary hover:text-light-green-primary dark:hover:text-dark-green-primary transition-all' />
            </a>
          </li>
          <li>
            <BiMenu className='lg:hidden w-7 h-7 text-color-text dark:text-light-primary hover:text-light-green-primary dark:hover:text-dark-green-primary transition-all cursor-pointer' onClick={() => setShowNavBurger(true)} />
          </li>
        </ul>
      </header>
      <div className={`backdrop-blur-sm bg-light-button-secondary/20 w-full h-screen flex justify-end mt-[-56px] absolute transition duration-[.6s] ${showNavBurger ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='bg-light-primary dark:bg-dark-secondary w-4/5 sm:w-80 lg:w-80'>
          <li className='px-4 py-3 flex justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
              {
                theme === 'dark'
                  ? (
                    <button className='flex justify-center items-center' onClick={() => { setTheme('light') }}>
                      <BiSun className='w-7 h-7 text-dark-green-primary hover:text-light-primary transition-all' />
                    </button>
                    )
                  : (
                    <button className='flex justify-center items-center' onClick={() => { setTheme('dark') }}>
                      <BiMoon className='w-7 h-7 text-light-green-primary hover:text-color-text transition-all' />
                    </button>
                    )
              }
              <a href='https://github.com/RANDRESS23/rick-and-morty-app' target='_blank' rel='noreferrer'>
                <AiFillGithub className='w-7 h-7 text-color-text dark:text-light-primary hover:text-light-green-primary dark:hover:text-dark-green-primary transition-all' />
              </a>
            </div>
            <AiOutlineClose className='w-7 h-7 text-color-text dark:text-light-primary hover:text-light-green-primary dark:hover:text-dark-green-primary transition-all cursor-pointer' onClick={() => setShowNavBurger(false)} />
          </li>
          <Link to='/' className='bg-light-green-secondary dark:bg-dark-green-primary hover:opacity-70 transition-all px-4 py-1 flex items-center'>
            <li>
              <span className='text-lg text-color-text rounded font-semibold'>Home</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
