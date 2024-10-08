import React from 'react';
import './css/Home.css';
import { NavLink } from 'react-router-dom'; 
import logo from './img/nutrifit_logo.svg'; 

const Home = () => {
  return (
    <div>
      {/* Menu de navigation */}
      <header className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" /> {/* Affichage du logo */}
        </div>
        <nav className="nav-links">
          <NavLink exact to="/" className="nav-item" activeClassName="active">Accueil</NavLink>
          <NavLink to="/recipes" className="nav-item" activeClassName="active">Recettes</NavLink>
          <NavLink to="/sports" className="nav-item" activeClassName="active">Sports</NavLink>
          <NavLink to="/faq" className="nav-item" activeClassName="active">FAQ</NavLink>
        </nav>
      </header>

      <section className="download-app">
        <div className="download-content">
          <p>Télécharger notre application</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
