const baseUrl = "https://pokeapi.co/api/v2"

export async function getPokemonList() {
  const res = await fetch(`${baseUrl}/pokemon?limit=100`)
  return res.json()
}

export async function getDetails(apiUrl){
  const res = await fetch(`${apiUrl}`)
  return res.json()
}

export async function pokeSearch(formData) {
  const res = await fetch(`${baseUrl}/pokemon/${formData.query}/`)
  return res.json()
}

export async function getPokemon(id) {
  const res = await fetch(`${baseUrl}/pokemon/${id}`);
  return res.json()
}

export async function getBerryList(){
  const res = await fetch(`${baseUrl}/berry/`)
  return res.json()
}