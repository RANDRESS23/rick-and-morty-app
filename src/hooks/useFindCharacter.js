import { useState, useEffect } from 'react'
import getCharacter from '../services/getCharacter'

export default function useFindCharacter ({ nameCharacter }) {
  const [charactersFinded, setCharactersFinded] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCharacter({ nameCharacter })
      .then(response => {
        setCharactersFinded(response)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }, [nameCharacter])

  return { charactersFinded, loading }
}
