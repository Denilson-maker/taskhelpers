import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import HomeCabecalho from "./HomeCabecalho";
import HomeRodape from "./HomeRodape";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    const btn = document.querySelector(".back-to-top");

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="App">
      <HomeCabecalho />

      {/* Hero / Carrossel */}
      <div className="carousel-container">
        <div className="carousel-overlay">
          <h1>“Ajudamos em tudo o que precisares! Tu pedes, nós resolvemos”</h1>
          <a
            href="https://wa.me/955 934 887"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Faz o teu pedido agora no WhatsApp
          </a>
        </div>

        <Slider {...settings} className="carousel-slider">
          <div><img src="img1.jpg" alt="Imagem 1" /></div>
          <div><img src="img2.jpg" alt="Imagem 2" /></div>
          <div><img src="img3.jpg" alt="Imagem 3" /></div>
        </Slider>
      </div>

      {/* Sobre */}
      <section className="sobre">
        <h2>Sobre a Task Helpers</h2>
        <hr className="linha-azul" />
        <p>
          A Task Helpers é uma empresa de serviços sob demanda que nasceu com o objetivo de
          facilitar a vida das pessoas. Atuamos como um verdadeiro “ajudante do dia a dia”,
          oferecendo serviços digitais, entregas, compras por pedido e venda de produtos.
          Nosso slogan, <strong>“Tu pedes, nós resolvemos”</strong>, resume nossa missão de
          atender às necessidades dos clientes de forma rápida, confiável e eficiente.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="cards">
        <div className="card">
          <h3>Missão</h3>
          <p>Facilitar a vida dos clientes oferecendo serviços digitais, entregas,
            compras por pedido e revenda de produtos de forma rápida, confiável e eficiente.</p>
        </div>

        <div className="card">
          <h3>Visão</h3>
          <p>Ser referência nacional em serviços sob demanda, reconhecida pela qualidade,
            confiança e inovação no atendimento.</p>
        </div>

        <div className="card">
          <h3>Valores</h3>
          <p>Confiança, rapidez, qualidade, empatia e inovação guiam todas as ações da Task Helpers,
            garantindo satisfação total aos clientes.</p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="diferenciais-section">
        <div className="diferenciais-container">
          <div className="diferenciais-text">
            <h2>Diferenciais</h2>
            <div className="etapa"><h2>1.</h2> Atendimento rápido e confiável.</div>
            <div className="etapa"><h2>2.</h2> Variedade de serviços: digital, entregas, compras, revenda.</div>
            <div className="etapa"><h2>3.</h2> Transparência nos preços e processos.</div>
          </div>

          <div className="diferenciais-img">
            <img src="img-logo.jpg" alt="Diferenciais" />
            <p>A Task Helpers está pronta para resolver tudo o que você precisar!</p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="funciona-section">
        <div className="funciona-container">
          <div className="funciona-img">
            <img src="img4.jpg" alt="Como Funciona" />
            <p>Simples, rápido e confiável, do pedido à entrega!</p>
          </div>

          <div className="funciona-text">
            <h2>Como Funciona a Task Helpers</h2>
            <div className="etapa"><h2>1.</h2> O cliente faz o pedido via WhatsApp.</div>
            <div className="etapa"><h2>2.</h2> A Task Helpers procura, compra ou realiza o serviço solicitado.</div>
            <div className="etapa"><h2>3.</h2> O cliente recebe em casa de forma rápida e segura.</div>
          </div>
        </div>
      </section>

      <HomeRodape />
    </div>
  );
}

export default Home;
