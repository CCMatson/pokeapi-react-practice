import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">
      <Link to="/">PokeList</Link>
      <Link to="/poke-search">Search</Link>
    </header>
  );
};

export default NavBar;