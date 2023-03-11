import React, { useState, useEffect } from 'react'
import { getPokemon } from '../../services/api-calls'


const Battle = (props) => {
  const playerChoiceId = props.pokes.id

let playerTwo = Math.floor(Math.random() * 1000) +1
while (playerTwo === playerChoiceId) {
  playerTwo = Math.floor(Math.random() * 1000) +1
}

let playerThree = Math.floor(Math.random() * 1000) + 1;
while (playerTwo === playerChoiceId || playerThree === playerTwo) {
  playerThree = Math.floor(Math.random() * 1000) + 1;
}

  const [ashPokemon, setAshPokemon] = useState(null)
  const [mistyPokemon, setMistyPokemon] = useState(null)
  const [brockPokemon, setBrockPokemon] = useState(null)
  const [winner, setWinner] = useState(null)



  //   const fetchData = useCallback(async() => {
  //     try {
  //       const ash = await getPokemon(playerChoiceId)
  //       const misty = await getPokemon(playerTwo)
  //       const brock = await getPokemon(playerThree)
    
  //       setAshPokemon(ash)
  //       setMistyPokemon(misty)
  //       setBrockPokemon(brock)

  //     } catch (error){
  //       console.log(error)
  //     }
  //   fetchData()
  // }, [playerChoiceId])

  // useEffect(() => {
  //   if (!playerChoiceId) return
  //   fetchData()
  // }, [playerChoiceId])


  useEffect(() => {
    const fetchData = async () => {
      if (!playerChoiceId) return 
      const ash = await getPokemon(playerChoiceId)
      const misty = await getPokemon(playerTwo)
      const brock = await getPokemon(playerThree)
  
      setAshPokemon(ash)
      setMistyPokemon(misty)
      setBrockPokemon(brock)
    }
    fetchData()
  }, [playerChoiceId])
  
  useEffect(() => {
    if (ashPokemon && mistyPokemon && brockPokemon) {
      const ashDamage = Math.floor(Math.random() * ashPokemon.base_experience);
      const mistyDamage = Math.floor(Math.random() * mistyPokemon.base_experience);
      const brockDamage = Math.floor(Math.random() * brockPokemon.base_experience);

      if (ashDamage > mistyDamage && ashDamage > brockDamage) {
        setWinner('Ash');
      } else if (mistyDamage > ashDamage && mistyDamage > brockDamage) {
        setWinner('Misty');
      } else if (brockDamage > ashDamage && brockDamage > mistyDamage) {
        setWinner('Brock');
      } else {
        setWinner('Tie');
      }
    }
  }, [ashPokemon, mistyPokemon, brockPokemon]);

  return (
    <div>
      <div className='headlines'>
      <h1>Welcome to the Battle!</h1>
    <h1>It's Ash vs. Misty vs. Brock</h1>
      </div>
    <div className="battlefield">
      <div className="pokemon">
        {ashPokemon && (
          <div>
            {winner === 'Ash' && <p>Winner!</p>}
            <h2>Ash's pokemon is</h2>
            <h2>{ashPokemon.name}</h2>
            <img src={ashPokemon.sprites.front_default} alt={ashPokemon.name} />
          </div>
        )}
      </div>
      <div className="pokemon">
        {mistyPokemon && (
          <div>
            {winner === 'Misty' && <p>Winner!</p>}
            <h2>Misty's pokemon is</h2>
            <h2>{mistyPokemon.name}</h2>
            <img src={mistyPokemon.sprites.front_default} alt={mistyPokemon.name} />
          </div>
        )}
      </div>
      <div className="pokemon">
        {brockPokemon && (
          <div>
            {winner === 'Brock' && <p>Winner!</p>}
            <h2>Brock's pokemon is</h2>
            <h2>{brockPokemon.name}</h2>
            <img src={brockPokemon.sprites.front_default} alt={brockPokemon.name} />
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Battle;

