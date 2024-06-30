import InfoCharacter from './InfoCharacter'

export default function CharacterCard ({ character }) {
  const { name, gender, location, origin, species, status, image } = character
  // CORREGIR LA CARD
  return (
    <div className='h-screen w-full flex justify-center items-center pt-28 lg:pt-10'>
      <div className='w-9/12 h-auto lg:h-[85%] bg-logo bg-no-repeat bg-center border shadow-2xl shadow-light-green-primary/40 rounded-lg flex flex-col justify-between'>
        <div className='bg-light-green-primary py-1 lg:py-3 rounded-t-lg border-b'>
          <p className='text-lg lg:text-2xl text-light-primary text-center font-bold'>IDENTIFICATION CARD</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center px-6 lg:px-10'>
          <div className={`lg:absolute w-full h-1/3 lg:h-[63%] lg:w-[30%] rounded-lg border mt-4 lg:pt-0 lg:${name.length > 27 ? 'mt-24' : 'mt-14'}`}>
            <img src={image} alt={name} className='h-full w-full rounded-lg object-cover' />
          </div>
          <div className='w-full lg:ml-[28rem] flex flex-col justify-between gap-3 lg:gap-7'>
            <div className='flex sm:grid sm:grid-cols-2 lg:flex flex-col gap-2 pb-5 lg:pb-0 pt-5 lg:pt-0'>
              <InfoCharacter label='Gender' value={gender} />
              <InfoCharacter label='Species' value={species} />
              <InfoCharacter label='Origin' value={origin.name} />
              <InfoCharacter label='Location' value={location.name} />
            </div>
            <div className={`py-1 lg:py-2 ${status === 'Alive' ? 'bg-light-green-primary' : status === 'Dead' ? 'bg-status-dead' : 'bg-status-unknown'} rounded-lg border`}>
              <p className='text-light-primary text-base lg:text-xl text-center font-bold'>{status}</p>
            </div>
          </div>
        </div>
        <div className='bg-light-green-primary w-full flex justify-center lg:justify-end items-center py-2 lg:py-3 rounded-b-lg border-t mt-[-40px]'>
          <p className='text-xl lg:text-4xl font-bold text-light-primary lg:w-[53%] text-center lg:text-left px-3 lg:px-0 lg:pr-10'>{name}</p>
        </div>
      </div>
    </div>
  )
}
