const baseUrl = "https://pokeapi.co/api/v2"

export async function getPokemonList() {
  const res = await fetch(`${baseUrl}/pokemon?limit=100`)
  return res.json()
}