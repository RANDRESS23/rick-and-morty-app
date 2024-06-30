import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CharactersFindedProvider } from './context/CharactersFindedContext'
import Home from './pages/Home'
import CharacterFocused from './pages/CharacterFocused'
import NotFound from './pages/NotFound'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import './App.css'

export default function App () {
  return (
    <div className='bg-light-secondary dark:bg-dark-secondary transition-all'>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <BrowserRouter>
          <CharactersFindedProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/character/:id' element={<CharacterFocused />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </CharactersFindedProvider>
        </BrowserRouter>
      </NextThemesProvider>
    </div>
  )
}
