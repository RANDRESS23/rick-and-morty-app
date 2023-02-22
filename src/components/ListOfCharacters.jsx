import { useContext } from 'react'
import { CharactersFindedContext } from '../context/CharactersFindedContext'
import Character from './Character'

export default function ListOfCharacters () {
  const { charactersFinded } = useContext(CharactersFindedContext)

  return (
    <div className='w-full flex flex-wrap justify-center items-center gap-4'>
      {
        charactersFinded.map(character => (
          <Character key={character.id} {...character} />
        ))
      }
    </div>
  )
}
