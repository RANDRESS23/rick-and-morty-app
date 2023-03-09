export default function CharacterCard ({ character }) {
  const { name, gender, location, origin, species, status, image } = character

  return (
    <div className='h-screen w-full flex justify-center items-center pt-10'>
      <div className='w-9/12 h-[85%] bg-logo bg-no-repeat bg-center border shadow-2xl shadow-light-green-primary/40 rounded-lg flex flex-col justify-between'>
        <div className='bg-light-green-primary py-3 rounded-t-lg border-b'>
          <p className='text-2xl text-light-primary text-center font-bold'>IDENTIFICATION CARD</p>
        </div>
        <div className='flex items-center px-10'>
          <div className={`absolute h-[63%] w-[30%] rounded-lg border ${name.length > 27 ? 'mt-24' : 'mt-14'}`}>
            <img src={image} alt={name} className='h-full rounded-lg' />
          </div>
          <div className='w-full ml-[28rem] flex flex-col justify-between gap-7'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col rounded-lg border border-light-green-primary'>
                <p className='bg-light-green-secondary text-light-button-primary text-lg font-semibold rounded-t-lg w-full text-center'>Gender</p>
                <p className='text-light-button-primary text-lg w-full text-center bg-light-secondary rounded-b-lg'>{gender}</p>
              </div>
              <div className='flex flex-col rounded-lg border border-light-green-primary'>
                <p className='bg-light-green-secondary text-light-button-primary text-lg font-semibold rounded-t-lg w-full text-center'>Species</p>
                <p className='text-light-button-primary text-lg w-full text-center bg-light-secondary rounded-b-lg'>{species}</p>
              </div>
              <div className='flex flex-col rounded-lg border border-light-green-primary'>
                <p className='bg-light-green-secondary text-light-button-primary text-lg font-semibold rounded-t-lg w-full text-center'>Origin</p>
                <p className='text-light-button-primary text-lg w-full text-center bg-light-secondary rounded-b-lg'>{origin.name}</p>
              </div>
              <div className='flex flex-col rounded-lg border border-light-green-primary'>
                <p className='bg-light-green-secondary text-light-button-primary text-lg font-semibold rounded-t-lg w-full text-center'>Location</p>
                <p className='text-light-button-primary text-lg w-full text-center bg-light-secondary rounded-b-lg'>{location.name}</p>
              </div>
            </div>
            <div className={`py-2 ${status === 'Alive' ? 'bg-light-green-primary' : status === 'Dead' ? 'bg-status-dead' : 'bg-status-unknown'} rounded-lg border`}>
              <p className='text-light-primary text-xl text-center font-bold'>{status}</p>
            </div>
          </div>
        </div>
        <div className='bg-light-green-primary w-full flex justify-end items-center py-3 rounded-b-lg border-t'>
          <p className='text-4xl font-bold text-light-primary w-[53%] pr-10'>{name}</p>
        </div>
      </div>
    </div>
  )
}
