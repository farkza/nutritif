import logo from '../img/nutrifit_icon.png';
import '../css/Login.css';

const Login = () => {

  return (
    <div className="login-container">
      <img src={logo} alt="Nutrifit Logo" className="logo" />
      <h2>Connectez-vous</h2>
      <form className="login-form">
        <input 
          type="email" 
          placeholder="Email" 
          className="login-input" 
          required 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          className="login-input" 
          required 
        />
        <div className="form-footer">
          <button type="button" className="create-account-btn">
            Créer un compte
          </button>
          <button type="submit" className="login-btn">Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
