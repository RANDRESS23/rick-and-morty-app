import { useNavigate } from 'react-router-dom'
import MaleSymbol from './MaleSymbol'
import FemaleSymbol from './FemaleSymbol'
import UnknownSymbol from './UnknownSymbol'

export default function Character ({ id, index, name, gender, image, species, status }) {
  const navigate = useNavigate()

  const handleViewExtraInfoCharacter = () => {
    navigate(`/character/${id}`)
  }

  return (
    <div className={`w-64 flex flex-col grow bg-light-primary shadow-xl rounded-md cursor-pointer hover:opacity-75 transition-all ${status === 'Alive' ? 'shadow-light-green-primary/20' : status === 'Dead' ? 'shadow-status-dead/30' : 'shadow-status-unknown/20'}`} id={`character${index}`} onClick={handleViewExtraInfoCharacter}>
      <div>
        <img src={image} alt={name} className={`object-cover rounded-t-md border-4 ${status === 'Alive' ? 'border-status-alive' : status === 'Dead' ? 'border-status-dead' : 'border-status-unknown'}`} />
        <div className={`py-1 ${status === 'Alive' ? 'bg-status-alive' : status === 'Dead' ? 'bg-status-dead' : 'bg-status-unknown'}`}>
          <p className='text-light-primary text-lg text-center font-bold'>{status}</p>
        </div>
      </div>
      <p className='m-auto text-center pt-2 pb-1 px-2 text-xl font-bold'>{name}</p>
      <div className='flex justify-center items-center gap-2 pb-4 px-2'>
        <p className='text-sm'>{species}</p>
        <p className='text-sm'>|</p>
        <div className='flex items-center gap-1'>
          <p className='text-sm'>{gender}</p>
          {
            gender === 'Male'
              ? <MaleSymbol />
              : gender === 'Female'
                ? <FemaleSymbol />
                : <UnknownSymbol />
          }
        </div>
      </div>
    </div>
  )
}
