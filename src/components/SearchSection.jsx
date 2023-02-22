import InputSearch from './InputSearch'
import rick from '../assets/rick.png'
import evilRick from '../assets/evil-rick.png'

export default function SearchSection () {
  return (
    <div className='w-full h-screen flex justify-evenly items-center pt-14 gap-5'>
      <div className='bg-light-button-primary flex justify-center items-center w-2/5 h-4/5 shadow-2xl shadow-light-blue-primary/40'>
        <img src={evilRick} alt='Evil Rick - Rick and Morty Series' className='rounded-md' />
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
