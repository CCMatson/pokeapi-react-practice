import { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"
import { pokeSearch } from '../../services/api-calls'
import Battle from '../../components/Battle/Battle'

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
    <div className='battle-intro'>
      <h1>Hi Ash, welcome to the Pokemon battle</h1>
      <h1>Using lowercase letters, type in the name of the pokemon you want to play. </h1>
        <h2>The computer will generate random pokemon for Misty and Brock. The winner will be declared based on each pokemon's base experience.</h2>
      <h4>Try "pikachu" to get started</h4>
    </div>
      <SearchForm handlePokeSearch={handlePokeSearch} />
      <>
        <h1>You choose: {pokes.name}</h1>
        {/* <h4>Base experience: {pokes.base_experience}</h4>
        <h4>Species</h4>
        <li>{pokes.species?.name} </li>
        <li>{pokes.species?.url} </li> */}
        <img src={pokes.sprites?.front_default}alt="" />
        {/* <h4>Stat Name and Base Stats:</h4> */}
        {/* {pokes.stats?.map(stat =>
          <li>{stat.stat.name} & {stat.base_stat} </li>)} */}
      </>
      <Battle pokes={pokes} ></Battle>
      </div>
    </>
  );
}

export default PokeSearch