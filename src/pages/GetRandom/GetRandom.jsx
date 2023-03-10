import { useState } from 'react'

const RandomPokemon = (props) => {
const [randomPokemon, setRandomPokemon] = useState({})


const getRandomInt = (max) => {
  const randomNum = Math.floor(Math.random() * max)
  setRandomPokemon(props.pokeList[randomNum])

  return (
    <>
    <div>
  {randomPokemon.name}
      <button onClick={()=> getRandomInt(props.pokeList.length)}></button></div></>
  )
}
}
export default RandomPokemon;
