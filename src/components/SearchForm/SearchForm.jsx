import { useState } from "react";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
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
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;