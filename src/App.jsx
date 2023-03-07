import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CharactersFindedProvider } from './context/CharactersFindedContext'
import Home from './pages/Home'
import CharacterFocused from './pages/CharacterFocused'
import NotFound from './pages/NotFound'
import './App.css'

export default function App () {
  return (
    <div className='bg-light-secondary'>
      <BrowserRouter>
        <CharactersFindedProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/character/:id' element={<CharacterFocused />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CharactersFindedProvider>
      </BrowserRouter>
    </div>
  )
}
