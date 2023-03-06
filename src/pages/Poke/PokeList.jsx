import { useState } from 'react'

const PokeList = () => {
  const [pokeList, setPokeList] = useState([])
  return (
    <>
      <h1>Gotta catch them all</h1>
      {pokeList.length ?
        <>
          {pokeList.map(poke =>
            <div key={poke.id}>
              {poke.name}
            </div>
          )}

        </>
        :
        <>
          <h4>Pokemon are loading</h4>
        </>
      }
    </>
  );




}


export default PokeList