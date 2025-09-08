import React from "react";
import { Link } from "react-router-dom";

function HomeCabecalho() {
  return (
    <header className="header">
      <div className="logo-area">
        <img src="logo.png" alt="Logo" className="logo" />
        <span className="empresa">Task Helpers</span>
      </div>
      <nav className="nav">
        <ul className="menu">
          <li>
  <Link to="/"onClick={() => {window.scrollTo(0, 0);}}>Home</Link></li>

          <li><Link to="/servico">Serviços</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contacto</Link></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeCabecalho;
