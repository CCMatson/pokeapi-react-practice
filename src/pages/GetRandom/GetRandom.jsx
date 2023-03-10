import { useState } from 'react'
import { Link } from 'react-router-dom'

const RandomPokemon = (props) => {
const [randomPokemon, setRandomPokemon] = useState({})


const getRandomInt = (max) => {
  const randomNum = Math.floor(Math.random() * max)
  setRandomPokemon(props.pokeList[randomNum])

  if (!randomPokemon) return "Loading"
  return (
    <>
    <div>
      <h1>Random Poke</h1>
  {randomPokemon.name}
      <button onClick={()=> getRandomInt(props.pokeList.length)}></button></div></>
  )
}
}
export default RandomPokemon;
