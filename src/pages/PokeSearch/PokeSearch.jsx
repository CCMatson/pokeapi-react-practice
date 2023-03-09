import { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"

const PokeSearch = () => {
  const [pokes, setPokes] = useState([])
  return (
    <>
      <h3>Such Poke</h3>
      <SearchForm/>
    </>
  );
}
 
export default PokeSearch