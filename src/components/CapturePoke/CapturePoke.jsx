import React, { useState } from 'react';

const CapturePoke = () => {
  const [pokeList] = useState([]);

  return (
    <div>
      <h2>These pokemon have been captured</h2>
  
      {pokeList.length ?
        <>
          {pokeList.map(poke =>
            <div key={poke.url} >
  
              {poke.name}
          
            </div>

            
          )}
        </>
        :
        <>
          <h4>Pokemon are loading</h4>
        </>
      }
    </div>
  )
}

export default CapturePoke