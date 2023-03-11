import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">

      <Link to="/list" id="link">
      Pokedex
        <img src="https://i.imgur.com/8XcJZrZ.png" alt="pokeball" />
      </Link>

      <Link to="/" id="link">
        Battle!
        <img src="https://i.imgur.com/UhMEwil.png" alt="pikachu" />       
        </Link>
    </header>
  );
};

export default NavBar;