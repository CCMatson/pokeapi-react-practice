import { useEffect, useState } from 'react'
import { getPokemonList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const PokeList = () => {
  const [pokeList, setPokeList] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokeData = await getPokemonList()
      setPokeList(pokeData.results)
      console.log(pokeData.results)
    }
    fetchPokemonList()
  }, [])

  return (
    <>
      <h1>Gotta catch them all</h1>
      <h4>This is a list of pokemon</h4>
      {pokeList.length ?
        <>
          {pokeList.map(poke =>
            <div key={poke.url}>
              <Link to='/details' state={{poke}} className="links"> 
              {poke.name}
              </Link>
            </div>
          )}
        </>
        :
        <>
          <h4>Pokemon are loading</h4>
        </>
      }
    </>
  );
}


export default PokeList