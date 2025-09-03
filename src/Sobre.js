import React from "react";
import HomeCabecalho from "./HomeCabecalho";
import HomeRodape from "./HomeRodape";
import "./Sobre.css";

// Importação do Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Sobre() {
  // Dados para gráfico de credibilidade
  const credibilidadeData = [
    { ano: "2023", credibilidade: 60 },
    { ano: "2024", credibilidade: 80 },
    { ano: "2025", credibilidade: 95 },
  ];

  // Dados para gráfico de equipa
  const equipeData = [
    { cargo: "CEO", percent: 25 },
    { cargo: "Operações", percent: 25 },
    { cargo: "Financeiro", percent: 25 },
    { cargo: "Marketing", percent: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <HomeCabecalho />

      <main className="sobre-container">
        <section className="sobre-intro">
          <h1>Sobre a Task Helpers</h1>
          <p>
            A <strong>Task Helpers</strong> é uma empresa angolana criada para
            oferecer soluções práticas, rápidas e confiáveis. Acreditamos na
            inovação, na transparência e no compromisso com cada cliente.
          </p>
          <p>
          A Task Helpers é uma empresa de serviços sob demanda que nasceu com o objetivo de
          facilitar a vida das pessoas. Atuamos como um verdadeiro “ajudante do dia a dia”,
          oferecendo serviços digitais, entregas, compras por pedido e venda de produtos.
          Nosso slogan, <strong>“Tu pedes, nós resolvemos”</strong>, resume nossa missão de
          atender às necessidades dos clientes de forma rápida, confiável e eficiente.
        </p>
        
        </section>

       <section className="sobre-equipe">
  <h2>Nossa Equipa</h2>
  <div className="equipe-cards">
    {/* Card 1 */}
    <div className="card-membro">
      <img src="d.jpg" alt="Denilson Barbosa" />
      <h3>Denilson Barbosa</h3>
      <p className="cargo">CEO & Fundador da Task Helpers</p>
      <p className="descricao">
          Licenciado em Eng. Informática | 
         Experiência em liderança, tecnologia e empreendedorismo.
      </p>
    </div>

    {/* Card 2 */}
    <div className="card-membro">
      <img src="j.jpg" alt="Membro 2" />
      <h3>Jairo Fernando</h3>
      <p className="cargo">Diretor de Operações</p>
      <p className="descricao">
        Especialista em logística e gestão de processos, garantindo eficiência
        operacional em cada tarefa.
      </p>
    </div>

    {/* Card 3 */}
    <div className="card-membro">
      <img src="c.jpg" alt="Membro 3" />
      <h3>Cláudio Patrocínio</h3>
      <p className="cargo">Diretor Financeiro</p>
      <p className="descricao">
        Experiência em Contabilidade e Finanças, responsável pela gestão
        financeira e sustentabilidade da empresa.
      </p>
    </div>

    {/* Card 4 */}
    <div className="card-membro">
      <img src="g.jpg" alt="Membro 4" />
      <h3>Geovany Tchitengula</h3>
      <p className="cargo">Diretor de Marketing & Comunicação</p>
      <p className="descricao">
        Experiência em Marketing Digital, focado em comunicação, imagem da marca e
        estratégias de crescimento.
      </p>
    </div>
  </div>
</section>


        <section className="sobre-graficos">
          <h2>Credibilidade e Estrutura</h2>
          <div className="graficos-wrapper">
            {/* Gráfico de Barras - Credibilidade */}
            <div className="grafico">
              <h3>Crescimento da Credibilidade</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={credibilidadeData}>
                  <XAxis dataKey="ano" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="credibilidade" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Gráfico de Pizza - Equipa */}
            <div className="grafico">
              <h3>Estrutura da Equipa</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={equipeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                    dataKey="percent"
                  >
                    {equipeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </main>

      <HomeRodape />
    </div>
  );
}

export default Sobre;
