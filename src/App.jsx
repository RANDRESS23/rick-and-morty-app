import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import { CharactersFindedProvider } from './context/CharactersFindedContext'

export default function App () {
  return (
    <div className='bg-light-secondary'>
      <BrowserRouter>
        <CharactersFindedProvider>
          <Home />
        </CharactersFindedProvider>
      </BrowserRouter>
    </div>
  )
}
