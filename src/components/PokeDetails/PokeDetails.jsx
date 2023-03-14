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
    }
    fetchDetails()
  }, [location.state.poke.url])

  if (!pokePage) return

  const { sprites, name, height, weight, base_experience, species, stats, moves } = pokePage;


  return (
    <>
      {/* {pokePage.length ? */}
        <>
          <h1 className="welcome">Get to know {name}</h1>
          <section>
            <div className="pokeCard">
              <div className="background">
                <img src={sprites && sprites.front_default} alt="" />
                <img src={sprites && sprites.back_default} alt="" />
              </div>
              <div className="content">
                <p className="name">{name}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Base experience: {base_experience}</p>
                {species && <p>Species: {species.name}</p>}
              </div>
              <>
              </>
              <Link to='/list' className="return">Back to the Pokedex</Link>

              {stats && (
                <div className="stats">
                  <p>{name}'s stats:</p>
                  {stats.map(stat =>
                    <li>{stat.stat.name} @ {stat.base_stat} </li>)}
                </div>
              )}
            </div>
            {moves && (
              <div className="bonus-content">
                <p className="name">{name}'s moves</p>
                <div className="moves">
                  {moves.map(move =>
                    <li>{move.move.name} / </li>
                  )}
                </div>
              </div>
            )}
          </section>
        </>
        {/* : */}
        <>
          {/* <h1>Loading</h1> */}
        </>
      
    </>
  )
}

export default PokeDetails;