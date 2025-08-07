import { useState } from "react";
import "./collaborators.css";

import standImg1 from "../../assets/saida-1.svg";
import standDiamante from "../../assets/saida-2.svg";
import standOuro from "../../assets/saida-3.svg";
import standPrata from "../../assets/saida-4.svg";
import standBronze from "../../assets/saida-5.svg";
import totem from "../../assets/saida-6.svg";
import gastronomia from "../../assets/saida-7.svg";
import pagamento from "../../assets/saida-8.svg";

const stands = [
  {
    key: "diamante",
    title: "Stand Diamante",
    img: standDiamante,
    description:
      "Mobiliário Premium: (1 Mesa, 3 Cadeiras, 1 Balcão, 1 Sofá, 1 TV 50')",
    benefits: [
      "Entrevistas exclusivas ADAF",
      "Podcast ao vivo",
      "Postagens exclusivas nas redes sociais",
      "Workshop exclusivo na programação oficial",
      "Vídeo de 30 segundos no telão do Evento",
      "10 convites VIP para coquetel/recepção de abertura",
    ],
    size: "4m x 3m",
    footage: "12",
    price: "50.000,00",
    color: "#FFD700",
    icon: "💎"
  },
  {
    key: "ouro",
    title: "Stand Ouro",
    img: standOuro,
    description:
      "Inclusão de mobiliário básico: (1 Mesa, 2 Cadeiras, 1 Balcão e 1 Banqueta)",
    benefits: [
      "Localização estratégica, com bom fluxo",
      "Logo em destaque médio em material promocional",
      "Divulgação em Redes Sociais e Marketing",
      "Wi-fi",
      "3 Credenciais",
    ],
    size: "4m x 3m",
    footage: "12",
    price: "20.000,00",
    color: "#FFA500",
    icon: "🥇"
  },
  {
    key: "prata",
    title: "Stand Prata",
    img: standPrata,
    description:
      "Inclusão de mobiliário padrão: (1 Mesa, 1 Cadeira, Balcão e 1 Banqueta)",
    benefits: [
      "Metragem Padrão. Localização em área secundária",
      "Logo pequena em material promocional",
      "Divulgação em Redes Sociais e Marketing",
      "Citação em Redes Sociais",
      "Wi-fi",
      "2 Credenciais"
    ],
    size: "3m x 3m",
    footage: "9",
    price: "10.000,00",
    color: "#C0C0C0",
    icon: "🥈"
  },
  {
    key: "bronze",
    title: "Stand Bronze",
    img: standBronze,
    description:
      "Inclusão de mobiliário padrão: (1 Mesa e 1 Cadeira)",
    benefits: [
      "Metragem Reduzida",
      "Nome em lista de expositores no site",
      "Citação em Redes Sociais",
      "Wi-fi",
      "2 Credenciais"
    ],
    size: "3m x 3m",
    footage: "9",
    price: "2.500,00",
    color: "#CD7F32",
    icon: "🥉"
  },
  {
    key: "totem",
    title: "Totem",
    img: totem,
    description:
      "Inclusão de mobiliário padrão: (1 Monitor 43' e 1 Cadeira)",
    benefits: [
      "Nome em lista de expositores no site",
      "Citação em Redes Sociais",
      "Wi-fi",
      "2 Credenciais"
    ],
    size: "2m x 1m",
    footage: "2",
    price: "2.000,00",
    color: "#4A90E2",
    icon: "📺"
  },
  {
    key: "gastronomia",
    title: "Gastronomia",
    img: gastronomia,
    description:
      "Inclusão de mobiliário na área externa: (Mesas e Cadeiras) e 1 Balcão na área interna",
    benefits: [
      "Nome em lista de expositores no site",
      "Citação em Redes Sociais",
      "Wi-fi",
      "6 Credenciais"
    ],
    size: "3m x 3m",
    footage: "9",
    price: "10.000,00",
    color: "#FF6B6B",
    icon: "🍽️"
  }
];

export default function Collaborators() {
  const [activeTab, setActiveTab] = useState("diamante");

  const currentStand = stands.find((s) => s.key === activeTab);

  return (
    <>
      <div className="collaborators-hero">
        <div className="hero-content">
          <h2>Seja um colaborador</h2>
          <p>Conecte sua marca ao maior evento agropecuário do Amazonas</p>
        </div>
      </div>
      
      <section className="collaborators-container">
        <div className="collaborators-header">
          <h2>Colaboradores</h2>
          <p>
            Participe do AGROAMAZONAS & DEFESA AGROPECUÁRIA como expositor e
            conecte sua marca ao maior evento agropecuário do Amazonas. Apresente
            seus produtos e serviços a um público qualificado, fortaleça seu nome
            no setor, amplie oportunidades de negócio e associe sua empresa à
            inovação, sustentabilidade e segurança alimentar.
          </p>
        </div>

        <div className="stands-section">
          <h3>níveis</h3>
          
          <div className="stand-tabs">
            {stands.map((stand) => (
              <button
                key={stand.key}
                className={`stand-tab${activeTab === stand.key ? " active" : ""}`}
                onClick={() => setActiveTab(stand.key)}
                style={{ 
                  '--stand-color': stand.color,
                }}
              >
                {stand.title}
              </button>
            ))}
          </div>

          <div className="stand-content">
            <div className="stand-visual">
              <div className="stand-image-container">
                <img
                  src={currentStand.img}
                  className="stand-img"
                />
                <div className="stand-badge" style={{ backgroundColor: currentStand.color }}>
                  {currentStand.icon}
                </div>
              </div>
            </div>
            
            <div className="stand-info">
              <div className="stand-header">
                <h3>{currentStand.title}</h3>
                <div className="stand-price">
                  R$ {currentStand.price}
                </div>
              </div>
              
              <p className="stand-description">{currentStand.description}</p>
              
              <div className="stand-specs">
                <div className="spec-item">
                  <span className="spec-label">Tamanho:</span>
                  <span className="spec-value">{currentStand.size}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Metragem:</span>
                  <span className="spec-value">{currentStand.footage} m²</span>
                </div>
              </div>
              
              <div className="stand-benefits">
                <h4>Benefícios Inclusos:</h4>
                <ul>
                  {currentStand.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="benefit-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="contact-button">
                Garantir meu Stand
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
