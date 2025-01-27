import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">Matières</a>
          </li>
          <li>
            <a href="/contact">Maisons</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
