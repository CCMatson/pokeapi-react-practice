

import React, { useState } from "react";
import axios from 'axios';
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])

  const getAllPokemon = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    setPokemon(res.data.results)
    console.log(setPokemon, 'setList')
  }

  let value = {
    pokemon,
    setPokemon,
    getAllPokemon
  }

  return (
    <PokemonContext.Provider value={ value }>{ children }</PokemonContext.Provider>
  );
}


