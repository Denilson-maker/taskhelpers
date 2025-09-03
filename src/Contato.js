import React from "react";
import HomeCabecalho from "./HomeCabecalho";
import HomeRodape from "./HomeRodape";
import "./Contato.css";
function Contato() {
  return (
    <div>
      <HomeCabecalho />

      <main className="contato">
        <h1>Fala Conosco</h1>
        <p>Estamos prontos para te ajudar em qualquer serviço.</p>

        <section className="contato-info">
          <h2>📱 Nossos Canais</h2>
          <ul>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/955 934 887" target="_blank" rel="noopener noreferrer">+244 955 934 887</a></li>
            <li><strong>Email:</strong> taskhelpers@gmail.com</li>
            <li><strong>Telefone:</strong> +244 955 934 887 / +244 944 832 074</li>
            <li><strong>Localização:</strong> Luanda – Angola</li>
          </ul>
        </section>

        <section className="contato-form">
          <h2>📩 Envia-nos uma mensagem</h2>
          <form>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
            <textarea placeholder="Digite sua mensagem..." required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>

        <section className="contato-redes">
          <h2>🌍 Redes Sociais</h2>
          <p>
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
          </p>
        </section>

        <section className="contato-horario">
          <h2>🕒 Horário</h2>
          <p>Segunda a Domingo – 24h/24h</p>
        </section>
      </main>

      <HomeRodape />
    </div>
  );
}

export default Contato;
