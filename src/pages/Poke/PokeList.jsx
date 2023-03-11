// import styles from './PokeList.module.css'
import { useEffect, useState } from 'react'
import { getPokemonList } from '../../services/api-calls'
import { Link } from 'react-router-dom'


const PokeList = () => {
  const [pokeList, setPokeList] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokeData = await getPokemonList()
      setPokeList(pokeData.results)
    }
    fetchPokemonList()
  }, [])

  return (
    <>
    <h1 className='welcome'>Pokedex 
    <img src="https://i.imgur.com/vTP6mW0.png" alt="jigglypuff" />
    <img src="https://i.imgur.com/WCnwWkr.png" alt="meowth" />
    </h1>
      <h1>Gotta catch 'em all! This is a list of 100 pokemon</h1>
      <h2>Click on the names to see Pokemon details</h2>
      <section className="container">
        {pokeList.length ?
          <>
            {pokeList.map(poke =>
              <div key={poke.url} >
                <Link to='/details' state={{ poke }} className="links">
                  <li> {poke.name}
                  </li>
                </Link>
              </div>
            )}
          </>
          :
          <>
            <h4>Pokemon are loading</h4>
          </>
        }
      </section>
    </>
  );
}


export default PokeList