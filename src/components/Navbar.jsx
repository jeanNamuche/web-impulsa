import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Impulsa</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/ciclos">Ciclos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/examenes">Examenes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
