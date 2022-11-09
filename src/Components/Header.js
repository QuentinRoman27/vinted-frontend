import { Link } from "react-router-dom";
import image from "../img/vinted.png";

const Header = () => {
  return (
    <div className="header">
      <img src={image} alt="" />

      <div className="input">
        <input type="submit" />
        <input type="text" />
      </div>

      <div className="buttons">
        <button className="one">S'inscrire | se connecter </button>

        <button className="two">vend tes articles</button>
      </div>

      <Link to="/Details">Vers Details</Link>
    </div>
  );
};

export default Header;
