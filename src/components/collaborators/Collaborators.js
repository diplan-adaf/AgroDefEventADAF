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
      "Entrevistas exclusivas ADAF",
      "Podcast ao vivo",
      "Postagens exclusivas nas redes sociais",
      "Workshop exclusivo na programação oficial",
      "Vídeo de 30 segundos no telão do Evento",
      "10 convites VIP para coquetel/recepção de abertura",
      "Workshop exclusivo na programação oficial",
      "Vídeo de 30 segundos no telão do Evento",
      "10 convites VIP para coquetel/recepção de abertura",
    ],
    size: "4m x 3m",
    footage: "12",
    price: "50.000,00",
  },
  {
    key: "ouro",
    title: "Stand Ouro",
    img: standOuro,
    description:
      "Inclusão de mobiliário básico: (1 Mesa, 2 Cadeiras, 1 Balcão e 1 Banqueta)",
    benefits: [
      "Localização estratégica, com bom fluxo",
      "Logo em destaque médio em material promocional (site e telão do evento)",
      "Divulgação em Redes Sociais e Marketing",
      "Wi-fi",
      "3 Credenciais",
    ],
    size: "4m x 3m",
    footage: "12",
    price: "20.000,00",
  },
  {
    key: "prata",
    title: "Stand Prata",
    img: standPrata,
    description:
      "Inclusão de mobiliário padrão: (1 Mesa, 1 Cadeira, Balcão e 1 Banqueta)",
    benefits: [
      "Metragem Padrão. Localização em área secundária, porém bem localizada",
      "Logo pequena em material promocional (site e rede sociais)",
      "Divulgação em Redes Sociais e Marketing",
      "Citação em Redes Sociais",
      "Wi-fi",
      "2 Credenciais"
    ],
    size: "3m x 3m",
    footage: "9",
    price: "10.000,00",
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
  },
  {
    key: "totem",
    title: "Totem",
    img: totem,
    description:
      "Inclusão de mobiliário padrão: (1 Monitor 43' e 1 Cadeira)",
    benefits: [
      "Nome em lista de expositores no site.",
      "Nome em lista de expositores no site",
      "Citação em Redes Sociais",
      "Wi-fi",
      "2 Credenciais"
    ],
    size: "2m x 1m",
    footage: "2",
    price: "2.000,00",
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
  }
];

export default function Collaborators() {
  const [activeTab, setActiveTab] = useState("diamante");

  const currentStand = stands.find((s) => s.key === activeTab);

  return (
    <>
      <div className="collaborators-hero">
        <h2>Seja um colaborador</h2>
      </div>
      <section className="collaborators-container">
        <h2>Colaboradores</h2>
        <p>
          Participe do AGROAMAZONAS & DEFESA AGROPECUÁRIA como expositor e
          conecte sua marca ao maior evento agropecuário do Amazonas. Apresente
          seus produtos e serviços a um público qualificado, fortaleça seu nome
          no setor, amplie oportunidades de negócio e associe sua empresa à
          inovação, sustentabilidade e segurança alimentar. Em um ambiente
          estratégico e com alta visibilidade, sua marca fará parte da
          celebração dos 13 anos da ADAF e do futuro do agro no estado. Seja
          protagonista desse movimento!{" "}
        </p>
        <h2>Stands</h2>
        <div className="stand-tabs">
          {stands.map((stand) => (
            <button
              key={stand.key}
              className={`stand-tab${activeTab === stand.key ? " active" : ""}`}
              onClick={() => setActiveTab(stand.key)}
            >
              {stand.title}
            </button>
          ))}
        </div>
        <div className="stand-content">
          <img
            src={currentStand.img}
            alt={currentStand.title}
            className="stand-img"
          />
          <div className="stand-info">
            <h3>{currentStand.title}</h3>
            <p>{currentStand.description}</p>
            <ul>
              {currentStand.benefits ? (
                currentStand.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))
              ) : (
                <li>Inclui: {currentStand.description}</li>
              )}
            </ul>
            <div className="stand-description">
              <span>Tamanho: {currentStand.size}</span>
              <span>Metragem: {currentStand.footage} m²</span>
              <span className="stand-price">Preço: R${currentStand.price}</span>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
