import InputSearch from './InputSearch'

export default function SearchSection () {
  return (
    <div className='w-full h-screen flex justify-evenly items-center pt-14 sm:gap-5'>
      <div className='flex justify-center items-center w-0 h-0 sm:w-1/2 sm:h-1/3 md:h-1/2 lg:w-2/5 lg:h-4/5 shadow-2xl shadow-light-blue-primary/40'>
        <img src='https://i.postimg.cc/85C7ndXk/evil-rick.png' alt='Evil Rick - Rick and Morty Series' className='h-full rounded-md object-cover' />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center mb-10 gap-3'>
          <img src='https://i.postimg.cc/cLQtKL8W/rick.png' alt='Rick Sanchez' className='w-0 lg:w-16' />
          <h1 className='text-4xl text-center font-bold text-light-button-primary'>Rick and Morty App</h1>
          <img src='https://i.postimg.cc/cLQtKL8W/rick.png' alt='Rick Sanchez' className='w-16' />
        </div>
        <InputSearch />
      </div>
    </div>
  )
}
