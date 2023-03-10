import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">
      <Link to="/" id="link">PokeList</Link>
      <Link to="/poke-search" id="link">Search</Link>
    </header>
  );
};

export default NavBar;