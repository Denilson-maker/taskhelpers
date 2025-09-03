import React from "react";
import HomeCabecalho from "./HomeCabecalho";
import HomeRodape from "./HomeRodape";
import "./Servico.css";

function Servico() {
  return (
    <div>
      <HomeCabecalho />

      <main className="servico-container">
        <header className="servico-hero">
          <h1>Nossos Serviços</h1>
          <p>Tu pedes, a Task Helpers resolve — rápido, confiável e com transparência.</p>
          <a
            className="cta-whatsapp"
            href="https://wa.me/955 934 887"
            target="_blank"
            rel="noreferrer"
          >
            Pedir pelo WhatsApp
          </a>
        </header>

        <section className="servico-grid">
          {/* Serviços Digitais */}
          <article className="servico-card">
            <div className="card-header">
              <span className="emoji">💻</span>
              <h2>Serviços Digitais</h2>
            </div>
            <ul className="card-list">
              <li>Elaboração de currículos e cartas formais</li>
              <li>Trabalhos escolares/universitários e inscrições online</li>
              <li>Design (cartazes, logotipos, convites, flyers)</li>
              <li>Criação e manutenção de sites</li>
              <li>Consultoria de TI e redes sociais</li>
              <li>Impressões, digitalizações e organização de documentos</li>
              <li>Perfis profissionais (LinkedIn, e-mail, portfólios)</li>
            </ul>
            <div className="card-footer">
              <span className="tag">a partir de</span>
              <strong>1.000 Kz</strong>
            </div>
          </article>

          {/* Entregas & Encomendas */}
          <article className="servico-card">
            <div className="card-header">
              <span className="emoji">🏍️</span>
              <h2>Entregas & Encomendas</h2>
            </div>
            <ul className="card-list">
              <li>Entrega de documentos e encomendas entre bairros</li>
              <li>Compras e entregas de gás, água e supermercado</li>
              <li>Retirada de medicamentos em farmácias</li>
              <li>Lavandaria: recolha e devolução</li>
              <li>Transporte de crianças para escolas e creches*</li>
              <li>Entrega de refeições de restaurantes</li>
              <li>Serviço de “resolvo por ti” (tarefas urgentes)</li>
            </ul>
            <div className="card-footer">
              <span className="tag">a partir de</span>
              <strong>2.000 Kz</strong>
            </div>
          </article>

          {/* Compras por Pedido */}
          <article className="servico-card">
            <div className="card-header">
              <span className="emoji">🛍️</span>
              <h2>Compras por Pedido</h2>
            </div>
            <ul className="card-list">
              <li>Roupas, calçados e moda casual</li>
              <li>Artigos desportivos (bolas, chuteiras, camisolas)</li>
              <li>Eletrônicos (telemóveis, tablets, computadores)</li>
              <li>Produtos de beleza e cosméticos</li>
              <li>Material escolar e de escritório</li>
              <li>Artigos para casa (ventoinhas, pequenos eletros)</li>
              <li>Alimentos e bebidas para eventos</li>
            </ul>
            <div className="card-footer">
              <span className="tag">sob consulta</span>
              <strong>orçamento</strong>
            </div>
          </article>

          {/* Revenda & Negócios */}
          <article className="servico-card">
            <div className="card-header">
              <span className="emoji">💼</span>
              <h2>Revenda & Negócios</h2>
            </div>
            <ul className="card-list">
              <li>Recompra de telemóveis usados</li>
              <li>Revenda de computadores e acessórios</li>
              <li>Compra e venda de ouro e bens de valor</li>
              <li>Consignação: vendemos por ti</li>
              <li>Intermediação de negócios locais</li>
              <li>Empréstimo rápido (regras e taxas claras)</li>
            </ul>
            <div className="card-footer">
              <span className="tag">sob consulta</span>
              <strong>orçamento</strong>
            </div>
          </article>

          {/* Apoio Geral ao Cliente */}
          <article className="servico-card">
            <div className="card-header">
              <span className="emoji">🧩</span>
              <h2>Apoio Geral ao Cliente</h2>
            </div>
            <ul className="card-list">
              <li>Fazer filas em repartições (BI, passaporte, INSS, bancos)</li>
              <li>Pagamento de contas (água, luz, internet, TV)</li>
              <li>Localizar casas para arrendar nas zonas: Gamek, Morro Bento, Patriota, Benfica, etc.</li>
              <li>Pesquisa e comparação de preços em praças e mercados</li>
              <li>Serviços de beleza ao domicílio (tranças, todo tipo)</li>
              <li>Acompanhamento de idosos ou pessoas com necessidade de apoio</li>
              <li>Pequenos reparos domésticos (lâmpadas, torneiras, ajustes)</li>
            </ul>
            <div className="card-footer">
              <span className="tag">a partir de</span>
              <strong>2.500 Kz</strong>
            </div>
          </article>
        </section>
        

        <aside className="notas-legais">
          <p>
            * Transporte de crianças: realizado mediante autorização do encarregado de educação e rotas combinadas.
            <br />
            ** Empréstimos: sujeitos a análise e contrato simples com prazos e taxas definidos.
          </p>
        </aside>

        <div className="cta-centro">
          <a
            className="cta-whatsapp large"
            href="https://wa.me/955 934 887"
            target="_blank"
            rel="noreferrer"
          >
            Pedir Orçamento Agora
          </a>
        </div>
      </main>

      <HomeRodape />
    </div>
  );
}

export default Servico;
