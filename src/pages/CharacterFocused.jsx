import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getCharacter from '../services/getCharacter'
import Header from '../components/Header'
import CharacterCard from '../components/CharacterCard'
import loaderSpinner from '../assets/grid.svg'

export default function CharacterFocused () {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const GET_CHARACTER_URL = `https://rickandmortyapi.com/api/character/${id}`

    getCharacter({ urlFetch: GET_CHARACTER_URL })
      .then(response => {
        console.log({ response })
        setCharacter(response)
        setLoading(false)
      })
      .catch(error => {
        console.log({ error })
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Header />
      {
        loading
          ? (
            <div className='h-screen flex justify-center items-center'>
              <img src={loaderSpinner} alt='loader-spinner' />
            </div>
            )
          : <CharacterCard character={character} />
      }
    </div>
  )
}
