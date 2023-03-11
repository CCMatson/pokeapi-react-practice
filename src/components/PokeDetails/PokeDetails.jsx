import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getDetails } from "../../services/api-calls";



const PokeDetails = () => {
  const [pokePage, setPokePage] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const pokeData = await getDetails(location.state.poke.url)
      setPokePage(pokeData)
      console.log(pokeData, 'poke card data')
    }
    fetchDetails()
  }, [location.state.poke.url])

  if (!pokePage) return <p>Loading...</p>
  return (
    <>
      <h1>Get to know this Pokemon</h1>
      <section>
        <div className="pokeCard">
          <div className="background">
            <img src={pokePage.sprites?.front_default} alt="" />
            <img src={pokePage.sprites?.back_default} alt="" />
          </div>
          <div className="content">
            <p className="name">{pokePage.name}</p>

            <p>Height: {pokePage.height}</p>
            <p>Weight: {pokePage.weight}</p>
            <p>Base experience: {pokePage.base_experience}</p>
            <p>Species: {pokePage.species?.name}</p>
          </div>
          <>
          </>
          <Link to='/' className="return">Return to the Pokemon List Page</Link>
          
          <div className="stats">
            <h4>Stats:</h4>
            {pokePage.stats?.map(stat =>
              <li>{stat.stat.name} @ {stat.base_stat} </li>)}
          </div>
        </div>
        <div className="bonus-content">
          <p className="name">{pokePage.name}'s moves</p>
          <div className="moves">
            {pokePage.moves?.map(move =>
              <li>{move.move.name} / </li>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

export default PokeDetails;