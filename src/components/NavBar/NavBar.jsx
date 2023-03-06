import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">
      <Link to="/">PokeList</Link>
      {/* <Link to="/details">Details</Link> */}
    </header>
  );
};

export default NavBar;