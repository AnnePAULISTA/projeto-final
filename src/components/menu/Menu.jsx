import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <ul className="menu">
      <img
        className="logotype"
        src="https://uploaddeimagens.com.br/images/003/963/387/full/LOGO.png?1659187410"
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
