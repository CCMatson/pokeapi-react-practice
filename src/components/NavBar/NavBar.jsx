import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">
			<Link to="/">Home</Link>
      <Link to="/poke">PokeList</Link>
      <Link to="/search">Search for Something</Link>
    </header>
  );
};

export default NavBar;