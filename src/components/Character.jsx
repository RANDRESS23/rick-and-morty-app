export default function Character ({
  id, name, gender, image, species, status, type, origin, location
}) {
  return (
    <div className='w-60 bg-light-primary shadow-2xl shadow-light-blue-secondary rounded-md'>
      <img src={image} alt={name} className='rounded-t-md border-4 border-status-alive' />
      <p className='w-2/4 m-auto mt-4 bg-light-blue-secondary rounded-md text-center py-2 text-lg font-bold'>{name}</p>
      <div className='flex justify-between items-center py-4'>
        <div>
          <div className='flex justify-center items-center gap-2 pl-2'>
            <p>{species}</p>
            <p>|</p>
            <p>{gender}</p>
          </div>
        </div>
        <div className='bg-status-alive py-1 px-2 rounded-md'>
          <p className='text-light-primary text-center font-semibold'>{status}</p>
        </div>
      </div>
    </div>
  )
}
