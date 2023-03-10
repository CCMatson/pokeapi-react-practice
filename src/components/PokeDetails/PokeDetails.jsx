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
      console.log(pokeData)
    }
    fetchDetails()
  }, [location.state.poke.url])

  if (!pokePage) return <p>Loading...</p>
  return (
    <>
      <h1>Get to know this Pokemon</h1>
      <section>


      <div className="pokeCard">
        <h4>Name: {pokePage.name}</h4>
        <h4>Height: {pokePage.height}</h4>
        <h4>Weight: {pokePage.weight}</h4>
        <h4>Species: {pokePage.species?.name}</h4>
        <img src={pokePage.sprites?.front_default} alt="" />
        <img src={pokePage.sprites?.back_default} alt="" />
        <>
        <h4>This Pokemon can do these moves:</h4>
        <div className="moves">
        {pokePage.moves?.map(move => 
          <li>{move.move.name}</li>
          )}
        </div>
        </>
      
      </div>
      </section>
        <Link to='/' className="return">Return to the Pokemon List Page</Link>
    </>
  )
}

export default PokeDetails;