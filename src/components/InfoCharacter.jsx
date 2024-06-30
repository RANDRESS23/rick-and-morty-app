export default function InfoCharacter ({ label, value }) {
  return (
    <div className='flex sm:flex-col lg:flex-col rounded-lg border border-light-green-primary dark:text-dark-green-primary'>
      <p className='bg-light-green-secondary dark:bg-dark-green-secondary text-color-text text-base px-1 rounded-l-lg lg:rounded-t-lg lg:rounded-l-none lg:text-lg font-semibold w-full text-center transition-all flex justify-center items-center'>{label}</p>
      <p className='text-color-text text-base px-1 lg:text-lg w-full text-center bg-light-secondary rounded-r-lg lg:rounded-b-lg lg:rounded-r-none flex justify-center items-center'>{value}</p>
    </div>
  )
}
