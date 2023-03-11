import { useState } from "react";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value.toLowerCase() })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handlePokeSearch(formData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="query" 
          type="text" 
          autoComplete="off"
          onChange={handleChange}/>
          <button type="submit">Get your pokemon</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;