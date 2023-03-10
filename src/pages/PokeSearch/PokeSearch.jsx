import { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"
import { pokeSearch } from '../../services/api-calls'

const PokeSearch = () => {
  const [pokes, setPokes] = useState([])

  const handlePokeSearch = async formData => {
    const pokeResults = await pokeSearch(formData)
    console.log(formData)
    setPokes(pokeResults)
    console.log(pokeResults)
    console.log(setPokes)

  }
  return (
    <>
      <h1>Search by number:</h1>
      <h2>Input number to learn about the corresponding pokemon</h2>
      <SearchForm handlePokeSearch={handlePokeSearch} />
      <>
        <h1>Name: {pokes.name}</h1>
        <h4>Base experience: {pokes.base_experience}</h4>
        <h4>Species</h4>
        <li>{pokes.species?.name} </li>
        <li>{pokes.species?.url} </li>
        <img src={pokes.sprites?.front_default}alt="" />
        <h4>Stat Name and Base Stats:</h4>
        {pokes.stats?.map(stat =>
          <li>{stat.stat.name} & {stat.base_stat} </li>)}
      </>












    </>
  );
}

export default PokeSearch