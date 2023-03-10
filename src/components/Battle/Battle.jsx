import React, { useState, useEffect } from 'react'
import { getPokemon } from '../../services/api-calls'

const Battle = () => {
  const [ashPokemon, setAshPokemon] = useState(null)
  const [mistyPokemon, setMistyPokemon] = useState(null)
  const [brockPokemon, setBrockPokemon] = useState(null)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const ash = await getPokemon('pikachu')
      const misty = await getPokemon('ditto')
      const brock = await getPokemon('psyduck')

      setAshPokemon(ash)
      setMistyPokemon(misty)
      setBrockPokemon(brock)
    }
    fetchData()
  }, [])

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
            <h2>{ashPokemon.name}</h2>
            <img src={ashPokemon.sprites.front_default} alt={ashPokemon.name} />
            {winner === 'Ash' && <p>Winner!</p>}
          </div>
        )}
      </div>
      <div className="pokemon">
        {mistyPokemon && (
          <div>
            <h2>{mistyPokemon.name}</h2>
            <img src={mistyPokemon.sprites.front_default} alt={mistyPokemon.name} />
            {winner === 'Misty' && <p>Winner!</p>}
          </div>
        )}
      </div>
      <div className="pokemon">
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

