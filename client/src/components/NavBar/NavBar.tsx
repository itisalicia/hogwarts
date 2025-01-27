import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-container">
      <nav className="nav">
        <img src="./logo.png" alt="hogwarts logo" className="logo-nav" />
        <ul className="nav-list">
          <li className="nav-items">Accueil</li>
          <li className="nav-items">Matières</li>
          <li className="nav-items">Maisons</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
