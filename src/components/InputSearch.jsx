export default function InputSearch () {
  return (
    <div>
      <form className='flex gap-3'>
        <input type='text' placeholder='Put a Rick and Morty character...' className='w-72 px-5 py-2 border border-light-button-secondary rounded-md text-base text-light-button-primary focus:outline-none focus:border-light-blue-primary' />
        <button type='submit' className='bg-light-button-primary text-base text-light-primary px-5 py-2 rounded-md hover:bg-light-button-secondary transition-all font-semibold'>Search</button>
      </form>
    </div>
  )
}
