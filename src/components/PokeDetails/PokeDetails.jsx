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
      <h4>Get to know this Pokemon</h4>
      <div>
        <h4>Name: {pokePage.name}</h4>
        <h4>Height: {pokePage.height}</h4>
        <h4>Weight: {pokePage.weight}</h4>
        <img src={pokePage.sprites?.front_default} alt="" />
        <>
        <h4>This Pokemon can do these moves:</h4>
        {pokePage.moves?.map(move => 
          <li>{move.move.name}</li>
        )}
        </>
        <Link to='/poke' className="links">Return to the Pokemon List Page</Link>
      </div>
    </>
  )
}

export default PokeDetails;