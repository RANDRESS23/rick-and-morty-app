import ListOfCharacters from './ListOfCharacters'
import SearchSection from './SearchSection'

export default function MainSection () {
  return (
    <div className='container m-auto px-20 flex flex-col justify-center items-center'>
      <SearchSection />
      <ListOfCharacters />
    </div>
  )
}
