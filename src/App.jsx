import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'

export default function App () {
  return (
    <div className='bg-light-secondary'>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}
