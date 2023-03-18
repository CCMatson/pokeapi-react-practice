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

  if (!pokes) return
  return (
    <>
      <h1 className='welcome'>Hi Ash, welcome to the Pokemon battle!</h1>
      <div>
      </div>
      <div className='battle-container'>
        <h1>Enter the name of a pokemon then hit the button to start your battle.</h1>
        <div className='battle-form'>
          <SearchForm handlePokeSearch={handlePokeSearch} />
        </div>
      </div>
      <div className='pokedex-container'>
        <div className='cta'>
          <h1>The computer will generate random pokemon for Misty and Brock. The winner will be declared based on each pokemon's base experience.</h1>
        </div>
      </div>
      <>
        {/* <h1>Your choice? {pokes.name}! </h1>
        <img src={pokes.sprites?.front_default} alt="" /> */}

      </>
      <Battle pokes={pokes} ></Battle>
    </>
  );
}

export default PokeSearch