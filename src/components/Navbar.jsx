import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { path: "/", text: "Accueil" },
  { path: "/Apropos", text: "A propos" },
  { path: "/Contact", text: "Contact" },
];

function Navbar() {
  return (
    <div>
      <div className="logo">
        <img src="src/assets/MENFIN.jpg" alt="Gaston" />
      </div>
      <div className="navbar">
        <Link to="/" className="ListBooks">
          <p>Accueil</p>
        </Link>
        <Link to="/APropos" className="APropos">
          <p>A propos</p>
        </Link>
        <Link to="/Contact" className="Contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
