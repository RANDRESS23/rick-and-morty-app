export default function InfoCharacter ({ label, value }) {
  return (
    <div className='flex sm:flex-col lg:flex-col rounded-lg border border-light-green-primary dark:text-dark-green-primary'>
      <p className='bg-light-green-secondary dark:bg-dark-green-secondary text-color-text text-base px-1 rounded-t-lg lg:text-lg font-semibold w-full text-center transition-all'>{label}</p>
      <p className='text-color-text text-base px-1 lg:text-lg w-full text-center bg-light-secondary rounded-b-lg'>{value}</p>
    </div>
  )
}
