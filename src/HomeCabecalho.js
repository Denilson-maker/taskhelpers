import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function HomeCabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="logo-area">
        <img src="logo.png" alt="Logo" className="logo" />
        <span className="empresa">Task Helpers</span>
      </div>

      {/* Botão hambúrguer (só no mobile) */}
      <button className="hamburguer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul className="menu">
          <li>
            <Link to="/" onClick={closeMenu}>Início</Link>
          </li>
          <li>
            <Link to="/servico" onClick={closeMenu}>Serviços</Link>
          </li>
          <li>
            <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
          </li>
          <li>
            <Link to="/contato" onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeCabecalho;
