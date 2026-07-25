import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🇱🇰 Discover Sri Lanka</Link>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/destinations">Destinations</NavLink></li>
        <li><NavLink to="/culture">Culture & History</NavLink></li>
        <li><NavLink to="/food">Food & Cuisine</NavLink></li>
        <li><NavLink to="/travel-info">Travel Info</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;