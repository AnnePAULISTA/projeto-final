import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <ul className="menu">
      <img
        className="logotype" sc="https://i.ibb.co/4T8bFQs/LOGO.png"
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
