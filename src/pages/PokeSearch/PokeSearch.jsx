import { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"
import { pokeSearch } from '../../services/api-calls'
import Battle from '../../components/Battle/Battle'
import { Link } from 'react-router-dom'

const PokeSearch = () => {
  const [pokes, setPokes] = useState([])

  const handlePokeSearch = async formData => {
    const pokeResults = await pokeSearch(formData)
    console.log(pokeResults)
    setPokes(pokeResults)
  }
  return (
    <>
      <div className='battle-container'>
    
          <h1>Hi Ash, welcome to the Pokemon battle!</h1>
          <h1>Enter the name of a pokemon ,then hit the button to start your battle.</h1>
        <div className='battle-intro'>
            <h2>Try "pikachu" to start</h2>
        <SearchForm handlePokeSearch={handlePokeSearch} />
          </div>
        </div>
        <div className='pokedex'>
          <h2>Spelling counts! Use this link to review Pokemon :
          </h2>
          <div>
          <Link to="/list" className='pokedex-link'> Pokedex <img src="https://i.imgur.com/8XcJZrZ.png" alt="" /></Link>
          </div>


        </div>

          <div className='cta'>
          <h2>The computer will generate random pokemon for Misty and Brock. The winner will be declared based on each pokemon's base experience.</h2>

        <>
          <h1>You choose: {pokes.name}</h1>
          <img src={pokes.sprites?.front_default} alt="" />
      
        </>
        <Battle pokes={pokes} ></Battle>
      </div>
    </>
  );
}

export default PokeSearch