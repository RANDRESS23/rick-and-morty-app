import { useContext } from 'react'
import ListOfCharacters from './ListOfCharacters'
import SearchSection from './SearchSection'
import { CharactersFindedContext } from '../context/CharactersFindedContext'

export default function MainSection () {
  const { charactersFinded } = useContext(CharactersFindedContext)

  return (
    <div className='container m-auto px-20 flex flex-col justify-center items-center'>
      <SearchSection />
      {
        charactersFinded.length > 0 && <ListOfCharacters />
      }
    </div>
  )
}
