import { useState, useContext } from 'react'
import useFindCharacter from '../hooks/useFindCharacter'
import { CharactersFindedContext } from '../context/CharactersFindedContext'

export default function InputSearch () {
  const [nameCharacter, setNameCharacter] = useState('')
  const { setCharactersFinded } = useContext(CharactersFindedContext)
  const { charactersFinded, loading } = useFindCharacter({ nameCharacter })

  const handleChange = (e) => {
    setNameCharacter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setCharactersFinded(charactersFinded)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-3'>
        <input type='text' placeholder='Put a Rick and Morty character...' value={nameCharacter} onChange={handleChange} className='w-72 px-5 py-2 border border-light-button-secondary rounded-md text-base text-light-button-primary focus:outline-none focus:border-light-blue-primary' />
        <button type='submit' className='bg-light-button-primary text-base text-light-primary px-5 py-2 rounded-md hover:bg-light-button-secondary transition-all font-semibold'>Search</button>
      </form>
    </div>
  )
}
