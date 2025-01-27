import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="nav-container">
      <nav className="nav">
        <img src="./logo.png" alt="hogwarts logo" className="logo-nav" />
        <ul className="nav-list">
          <Link to="/">
            <li className="nav-items">Accueil</li>
          </Link>
          <Link to="/subjects">
            <li className="nav-items">Matières</li>
          </Link>
          <Link to="/houses">
            <li className="nav-items">Maisons</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
