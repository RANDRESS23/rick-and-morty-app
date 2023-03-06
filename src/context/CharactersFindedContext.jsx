import { createContext, useState } from 'react'

export const CharactersFindedContext = createContext()

export function CharactersFindedProvider ({ children }) {
  const [charactersFinded, setCharactersFinded] = useState([])
  const [nextCharacters, setNextCharacters] = useState(null)

  return (
    <CharactersFindedContext.Provider value={{ charactersFinded, setCharactersFinded, nextCharacters, setNextCharacters }}>
      {children}
    </CharactersFindedContext.Provider>
  )
}
