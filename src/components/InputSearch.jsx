import { useState, useContext } from 'react'
import { CharactersFindedContext } from '../context/CharactersFindedContext'
import getCharacter from '../services/getCharacter'
import toast, { Toaster } from 'react-hot-toast'

export default function InputSearch () {
  const [nameCharacter, setNameCharacter] = useState('')
  const { setCharactersFinded, setNextCharacters } = useContext(CharactersFindedContext)

  const handleChange = (e) => {
    setNameCharacter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const GET_CHARACTER_URL = 'https://rickandmortyapi.com/api/character/?name='

    getCharacter({ urlFetch: `${GET_CHARACTER_URL}${nameCharacter}` })
      .then(response => {
        setCharactersFinded(response.results || [])
        setNextCharacters(response.info.next)
        toast.success('Matches were found!')
      })
      .catch(error => {
        console.log({ error })
        toast.error('No matches found.')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-3'>
        <input type='text' placeholder='Put a Rick and Morty character...' value={nameCharacter} onChange={handleChange} className='w-72 px-5 py-2 border border-light-button-secondary rounded-md text-base text-light-button-primary focus:outline-none focus:border-light-green-primary' />
        <button type='submit' className='bg-light-button-primary text-base text-light-primary px-5 py-2 rounded-md hover:bg-light-button-secondary transition-all font-semibold'>Search</button>
      </form>
      <Toaster />
    </div>
  )
}
