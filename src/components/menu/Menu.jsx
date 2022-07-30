import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <ul className="menu">
      <img
        className="logotype"
        src="https://cdn.discordapp.com/attachments/835234743108632578/1002788550435156009/WhatsApp_Image_2022-07-30_at_00.54.50.jpeg?width=385&height=385"
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
