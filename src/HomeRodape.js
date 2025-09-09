import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function HomeRodape() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo pequena à esquerda */}
        <div className="footer-logo">
          <img src="logo.png" alt="Logo Task Helpers" />
          <span>Task Helpers</span>
        </div>

        {/* Redes sociais */}
        <div className="footer-info">
          <div className="footer-links">
            <a href="https://wa.me/244955934887" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/taskhelpers/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Task Helpers. Todos os direitos reservados.
          </div>
        </div>
      </div>

      {/* Botão voltar ao topo */}
      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
}

export default HomeRodape;
