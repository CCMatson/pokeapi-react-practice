const baseUrl = "https://pokeapi.co/api/v2"

export async function getPokemonList() {
  const res = await fetch(`${baseUrl}/pokemon?limit=100`)
  return res.json()
}

export async function getDetails(apiUrl){
  const res = await fetch(`${apiUrl}`)
  return res.json()
}