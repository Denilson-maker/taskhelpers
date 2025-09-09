import React, { useState } from "react";
import HomeCabecalho from "./HomeCabecalho";
import HomeRodape from "./HomeRodape";
import "./Contato.css";

function Contato() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xgvldaoo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Mensagem enviada com sucesso!");
      form.reset();
    } else {
      setStatus("❌ Ocorreu um erro. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <HomeCabecalho />

      <main className="contato">
        <h1>Fala Conosco</h1>
        <p>Estamos prontos para te ajudar em qualquer serviço.</p>

        <section className="contato-info">
          <h2>📱 Nossos Canais</h2>
          <ul>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/244955934887"
                target="_blank"
                rel="noopener noreferrer"
              >
                +244 955 934 887
              </a>
            </li>
            <li><strong>Email:</strong> taskhelpers007@gmail.com</li>
            <li><strong>Telefone:</strong> +244 955 934 887 / +244 944 832 074</li>
            <li><strong>Localização:</strong> Luanda – Angola</li>
          </ul>
        </section>

        <section className="contato-form">
          <h2>📩 Envia-nos uma mensagem</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu email" required />
            <textarea name="message" placeholder="Digite sua mensagem..." required></textarea>
            <button type="submit">Enviar</button>
          </form>

          {/* Mensagem de status */}
          {status && <p className="mensagem-status">{status}</p>}
        </section>

        <section className="contato-redes">
          <h2>🌍 Redes Sociais</h2>
          <p>
            <a href="#">Facebook</a> | <a href="https://www.instagram.com/taskhelpers/">Instagram</a> | <a href="#">LinkedIn</a>
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
