import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getCharacter from '../services/getCharacter'
import Header from '../components/Header'
import CharacterSection from '../components/CharacterSection'

export default function CharacterFocused () {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const GET_CHARACTER_URL = `https://rickandmortyapi.com/api/character/${id}`

    getCharacter({ urlFetch: GET_CHARACTER_URL })
      .then(response => {
        console.log(response)
        setCharacter(response)
        // setCharactersFinded(response.results || [])
        // setNextCharacters(response.info.next)
        // toast.success('Matches were found!')
      })
      .catch(error => {
        console.log({ error })
        // toast.error('No matches found.')
      })
  }, [])

  return (
    <div>
      <Header />
      <CharacterSection character={character} />
    </div>
  )
}
