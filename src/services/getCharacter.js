const GET_CHARACTER_URL = 'https://rickandmortyapi.com/api/character/?name='

export default async function getCharacter ({ nameCharacter }) {
  try {
    const response = await fetch(`${GET_CHARACTER_URL}${nameCharacter}`)
    const json = await response.json()

    return json.results
  } catch (error) {
    console.log(error)
  }
}
