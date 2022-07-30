import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "./menu.css";

function Menu() {
  return (
    <ul className="menu">
      <img
        className="logotype"
        src={logo} alt="lâmpada colorida com nome do site abaixo"
      ></img>
      <li className="item">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/learningmap">
          Fases da Alfabetização
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/tips">
          Como posso ajudar?
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/contact">
          Contato
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
