import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/profile">Profil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;