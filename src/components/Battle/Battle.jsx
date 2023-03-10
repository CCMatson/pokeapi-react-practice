import React, { useState, useEffect } from 'react'
import { getPokemon } from '../../services/api-calls'


const Battle = (props) => {
  const playerChoiceName = props.pokes.name
  const playerChoiceId = props.pokes.id
  // const playerTwo = (playerChoiceId - 2)
  // const playerThree = (playerChoiceId + 2)

let two = Math.floor(Math.random() * 1000) +1
while (two === playerChoiceId) {
  two = Math.floor(Math.random() * 1000) +1
}

let three = Math.floor(Math.random() * 1000) + 1;
while (two === playerChoiceId || three === two) {
  three = Math.floor(Math.random() * 1000) + 1;
}

  console.log(two, 'two')
  console.log(three, 'three')
  console.log(typeof playerChoiceId, 'idType')
  console.log(props, 'props')
  console.log(playerChoiceName, 'playerChoice')
  console.log(playerChoiceId, 'playerChoiceId')

  const [ashPokemon, setAshPokemon] = useState(null)
  const [mistyPokemon, setMistyPokemon] = useState(null)
  const [brockPokemon, setBrockPokemon] = useState(null)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const ash = await getPokemon(playerChoiceId)
      const misty = await getPokemon(two)
      const brock = await getPokemon(three)

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
    <h1>Ash vs. Misty vs. Brock</h1>
    <div className="battlefield">
      <div className="pokemon">
        {ashPokemon && (
          <div>
            <h2>Ash's pokemon</h2>
            <h2>{ashPokemon.name}</h2>
            <img src={ashPokemon.sprites.front_default} alt={ashPokemon.name} />
            {winner === 'Ash' && <p>Winner!</p>}
          </div>
        )}
      </div>
      <div className="pokemon">
        {mistyPokemon && (
          <div>
            <h2>Misty's pokemon</h2>
            <h2>{mistyPokemon.name}</h2>
            <img src={mistyPokemon.sprites.front_default} alt={mistyPokemon.name} />
            {winner === 'Misty' && <p>Winner!</p>}
          </div>
        )}
      </div>
      <div className="pokemon">
        <h4>Brock's pokemon</h4>
        {brockPokemon && (
          <div>
            <h2>{brockPokemon.name}</h2>
            <img src={brockPokemon.sprites.front_default} alt={brockPokemon.name} />
            {winner === 'Brock' && <p>Winner!</p>}
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Battle;

