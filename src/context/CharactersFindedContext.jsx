import { createContext, useState } from 'react'

export const CharactersFindedContext = createContext()

export function CharactersFindedProvider ({ children }) {
  const [charactersFinded, setCharactersFinded] = useState([])

  return (
    <CharactersFindedContext.Provider value={{ charactersFinded, setCharactersFinded }}>
      {children}
    </CharactersFindedContext.Provider>
  )
}
