export default function InfoCharacter ({ label, value }) {
  return (
    <div className='flex sm:flex-col lg:flex-col rounded-lg border border-light-green-primary'>
      <p className='bg-light-green-secondary text-light-button-primary text-base px-1 sm:rounded-t-lg lg:text-lg font-semibold rounded-l-lg lg:rounded-t-lg w-full text-center'>{label}</p>
      <p className='text-light-button-primary text-base px-1 lg:text-lg w-full text-center bg-light-secondary rounded-r-lg sm:rounded-b-lg lg:rounded-b-lg'>{value}</p>
    </div>
  )
}
