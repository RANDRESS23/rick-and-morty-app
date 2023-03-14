import { useState } from 'react'
import { BiMoon, BiSun, BiMenu } from 'react-icons/bi'
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Header () {
  const [showNavBurger, setShowNavBurger] = useState(false)

  return (
    <div className='fixed z-10 w-full bg-light-primary h-14 shadow-lg shadow-light-green-secondary/30'>
      <header className='container m-auto px-8 sm:px-20 flex justify-between items-center h-full'>
        <Link to='/'>
          <img src='https://i.postimg.cc/hjFmyZQL/logo-banner.png' alt='Rick and Morty | logo' className='w-24' />
        </Link>
        <ul className='flex justify-center items-center gap-6'>
          <li className='hidden lg:block'>
            <p className='text-lg text-light-button-primary bg-light-green-secondary px-4 py-1 rounded font-semibold cursor-default'>Home</p>
          </li>
          <li className='hidden lg:block text-3xl text-light-button-primary pb-2'>|</li>
          <li className='hidden lg:block'>
            <a href='#'>
              <BiSun className='w-7 h-7 text-light-green-primary hover:text-light-button-primary transition-all' />
              {/* <BiMoon className='w-7 h-7 text-light-button-primary' /> */}
            </a>
          </li>
          <li className='hidden lg:block'>
            <a href='https://github.com/RANDRESS23/rick-and-morty-app' target='_blank' rel='noreferrer'>
              <AiFillGithub className='w-7 h-7 text-light-button-primary hover:text-light-green-primary transition-all' />
            </a>
          </li>
          <li>
            <BiMenu className='lg:hidden w-7 h-7 text-light-button-primary hover:text-light-green-primary transition-all cursor-pointer' onClick={() => setShowNavBurger(true)} />
          </li>
        </ul>
      </header>
      <div className={`backdrop-blur-sm bg-light-button-secondary/20 w-full h-screen flex justify-end mt-[-56px] absolute transition duration-[.6s] ${showNavBurger ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='bg-light-primary w-4/5 sm:w-80 lg:w-80'>
          <li className='px-4 py-3 flex justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
              <a href='#'>
                <BiSun className='w-7 h-7 text-light-green-primary hover:text-light-button-primary transition-all' />
                {/* <BiMoon className='w-7 h-7 text-light-button-primary' /> */}
              </a>
              <a href='#'>
                <AiFillGithub className='w-7 h-7 text-light-button-primary hover:text-light-green-primary transition-all' />
              </a>
            </div>
            <AiOutlineClose className='w-7 h-7 text-light-button-primary hover:text-light-green-primary transition-all cursor-pointer' onClick={() => setShowNavBurger(false)} />
          </li>
          <li className=''>
            <p className='text-lg text-light-button-primary bg-light-green-secondary px-4 py-1 font-semibold cursor-default'>Home</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
