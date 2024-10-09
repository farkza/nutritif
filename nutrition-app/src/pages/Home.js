import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
import logo from '../img/nutrifit_logo.png';
import recipeImage1 from '../img/recipe1.jpg';
import recipeImage2 from '../img/recipe2.jpg';
import recipeImage3 from '../img/recipe3.jpg';
import popularRecipe1 from '../img/popularRecipe1.jpg';
import popularRecipe2 from '../img/popularRecipe2.jpg';
import popularRecipe3 from '../img/popularRecipe3.jpg';
import quoteIcon from '../img/quote.png';

const Home = () => {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <NavLink exact to="/" className="nav-item" activeClassName="active">Accueil</NavLink>
          <NavLink to="/recipes" className="nav-item" activeClassName="active">Recettes</NavLink>
          <NavLink to="/sports" className="nav-item" activeClassName="active">Sports</NavLink>
          <NavLink to="/faq" className="nav-item" activeClassName="active">FAQ</NavLink>
        </nav>
        <span className="login-text">Se connecter</span>
      </header>

      <section className="download-app">
        <div className="download-content">
          <p>Téléchargez</p>
          <p>notre application !</p>
        </div>
      </section>

      <div className="recipes-section">
        <div className="recipes-header">
          <h2 className="recipes-title">Nos recettes</h2>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher une recette" className="search-input" />
        </div>

        <div className="filter-buttons">
          <button className="filter-btn active">Tout</button>
          <button className="filter-btn">Petit-déjeuner</button>
          <button className="filter-btn">Déjeuner</button>
          <button className="filter-btn">Dessert</button>
        </div>

        <div className="recipe-cards">
          <div className="card">
            <img src={recipeImage1} alt="Recette 1" className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">Nom de la Recette 1</h3>
              <div className="tags">
                <span className="tag">Déjeuner</span>
                <span className="tag">Français</span>
              </div>
              <span className="time">30 min</span>
            </div>
          </div>
          <div className="card">
            <img src={recipeImage2} alt="Recette 2" className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">Nom de la Recette 2</h3>
              <div className="tags">
                <span className="tag">Déjeuner</span>
                <span className="tag">Français</span>
              </div>
              <span className="time">45 min</span>
            </div>
          </div>
          <div className="card">
            <img src={recipeImage3} alt="Recette 3" className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">Nom de la Recette 3</h3>
              <div className="tags">
                <span className="tag">Déjeuner</span>
                <span className="tag">Français</span>
              </div>
              <span className="time">20 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-section">
        <h2 className="popular-title">Populaire</h2>
        <div className="recipe-cards">
          <div className="card">
            <img src={popularRecipe1} alt="Recette Populaire 1" className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">Recette Populaire 1</h3>
              <div className="tags">
                <span className="tag">Déjeuner</span>
                <span className="tag">Français</span>
              </div>
              <span className="time">30 min</span>
            </div>
          </div>
          <div className="card">
            <img src={popularRecipe2} alt="Recette Populaire 2" className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">Recette Populaire 2</h3>
              <div className="tags">
                <span className="tag">Déjeuner</span>
                <span className="tag">Français</span>
              </div>
              <span className="time">45 min</span>
            </div>
          </div>
          <div className="card">
            <img src={popularRecipe3} alt="Recette Populaire 3" className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">Recette Populaire 3</h3>
              <div className="tags">
                <span className="tag">Déjeuner</span>
                <span className="tag">Français</span>
              </div>
              <span className="time">20 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="statistics-section">
        <h2 className="statistics-title">Quelques chiffres</h2>
        <div className="statistics-blocks">
          <div className="statistics-block">
            <p className="statistics-number">120+</p>
            <p className="statistics-label">Utilisateurs</p>
          </div>
          <div className="statistics-block">
            <p className="statistics-number">50</p>
            <p className="statistics-label">Recettes</p>
          </div>
          <div className="statistics-block">
            <p className="statistics-number">20+</p>
            <p className="statistics-label">Activités sportives</p>
          </div>
        </div>
      </div>

      <div className="comments-section">
        <h2 className="comments-title">Commentaires</h2>
        <p className="comments-subtitle">Ce que nos clients pensent de nous</p>
        <img src={quoteIcon} alt="Icône de citation" className="quote-icon" />
        <p className="comment">Super expérience ! L’équipe est vraiment professionnelle et a su répondre à toutes mes attentes. Je recommande vivement leurs services. Merci encore !</p>
        <div className="circle"></div>
        <p className="author">Clara D.</p>
      </div>

      <footer className="footer">
        <div className="footer-content"></div>
      </footer>
    </div>
  );
};

export default Home;
