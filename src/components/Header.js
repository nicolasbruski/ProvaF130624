import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Página inicial</Link>
          </li>
          <li className="nav-item">
            <Link to="/formulario" className="formulario-button">Formulário</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;