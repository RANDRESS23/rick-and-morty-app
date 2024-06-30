import { useEffect, useContext } from 'react'
import { CharactersFindedContext } from '../context/CharactersFindedContext'
import Character from './Character'
import getCharacter from '../services/getCharacter'

export default function ListOfCharacters () {
  const { charactersFinded, setCharactersFinded, nextCharacters, setNextCharacters } = useContext(CharactersFindedContext)

  useEffect(() => {
    const characterObserver = document.getElementById(`character${charactersFinded.length}`)

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          getCharacter({ urlFetch: nextCharacters })
            .then(response => {
              setCharactersFinded(prevResults => [...prevResults, ...response.results])
              setNextCharacters(response.info.next)
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
    }, {
      threshold: 0.5
    })

    if (nextCharacters) observer.observe(characterObserver)

    return () => {
      observer.unobserve(characterObserver)
    }
  }, [charactersFinded])

  return (
    <>
      <h2 className='text-3xl mb-10 font-bold'>All Characters</h2>
      <div className='w-full grid grid-container grid-cols-1 place-items-center sm:grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))] gap-6 pb-10'>
        {
          charactersFinded.map((character, index) => (
            <Character
              key={character.id}
              index={index + 1}
              {...character}
            />
          ))
        }
      </div>
    </>
  )
}
