export default async function getCharacter ({ urlFetch }) {
  try {
    const response = await fetch(urlFetch)
    const json = await response.json()

    return json
  } catch (error) {
    console.log(error)
  }
}
