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
          placeholder="Try pikachu first"
          onChange={handleChange}/>
          <button className="button" type="submit">Start your battle!</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;