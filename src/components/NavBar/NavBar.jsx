import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">
      <Link to="/list" id="link">PokeList</Link>
      <Link to="/" id="link"><img src="https://i.imgur.com/UhMEwil.png" alt="" /> Battle!</Link>
    </header>
  );
};

export default NavBar;