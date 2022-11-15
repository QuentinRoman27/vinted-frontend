import { Link } from "react-router-dom";
import img from "../img/vinted.png";
const Header = ({ token, handleToken }) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <img src={img} alt="Vinted" />
        </div>

        <div className="search-content">
          {token ? (
            <button
              onClick={() => {
                handleToken(null);
              }}
            >
              Deconnexion
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="header-signup">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="header-button">Se connecter</button>
              </Link>
            </>
          )}
          <div>
            <input
              type="text"
              class="search-input"
              placeholder="Recherche des articles"
            />
          </div>
          <div>
            <button class="header-button button-sold">
              Vends tes articles
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
