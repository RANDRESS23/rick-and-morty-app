import InputSearch from './InputSearch'
import rick from '../assets/rick.png'

export default function SearchSection () {
  return (
    <div className='w-full h-screen flex justify-evenly items-center pt-14'>
      <div className='bg-light-blue-primary w-96 h-96 rounded-md shadow-2xl shadow-light-blue-primary/40'>
        <img src='https://rickandmortyapi.com/api/character/avatar/119.jpeg' alt='bug inspect GIF by Rick and Morty' className='w-full h-full rounded-md object-cover' />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center mb-10 gap-3'>
          <img src={rick} alt='Rick Sanchez' className='w-16' />
          <h1 className='text-4xl font-bold text-light-button-primary'>Rick and Morty App</h1>
          <img src={rick} alt='Rick Sanchez' className='w-16' />
        </div>
        <InputSearch />
      </div>
    </div>
  )
}
