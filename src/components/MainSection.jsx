import { useState, useEffect, useContext } from 'react'
import ListOfCharacters from './ListOfCharacters'
import SearchSection from './SearchSection'
import { CharactersFindedContext } from '../context/CharactersFindedContext'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function MainSection () {
  const [showArrowUpButton, setShowArrowUpButton] = useState(false)
  const { charactersFinded } = useContext(CharactersFindedContext)

  useEffect(() => {
    const isShowArrowUpButton = () => {
      if (window.scrollY > 1000) setShowArrowUpButton(true)
      else setShowArrowUpButton(false)
    }

    window.addEventListener('scroll', isShowArrowUpButton)

    return () => {
      window.removeEventListener('scroll', isShowArrowUpButton)
    }
  }, [])

  return (
    <div className='container m-auto px-10 lg:px-20 flex flex-col justify-center items-center'>
      <SearchSection />
      {
        charactersFinded.length > 0 && <ListOfCharacters />
      }
      <BsFillArrowUpCircleFill className={`fixed bottom-5 right-5 w-16 h-16 bg-light-primary dark:bg-dark-primary rounded-full text-dark-primary dark:text-light-primary hover:text-dark-secondary dark:hover:text-light-secondary cursor-pointer transition duration-[.4s] ${showArrowUpButton ? 'translate-x-0' : 'translate-x-[200%]'}`} onClick={() => window.scrollTo(0, 0)} />
    </div>
  )
}
