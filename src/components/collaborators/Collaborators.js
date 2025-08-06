import { useState } from "react";
import "./collaborators.css";

// Exemplo de dados dos stands
const stands = [
  {
    key: "diamante",
    title: "Stand Diamante",
    img: require("../../assets/descricaoBanner.png"),
    description: "Espaço premium com localização privilegiada, estrutura completa e destaque na divulgação do evento.",
    price: "R$ 10.000,00"
  },
  {
    key: "ouro",
    title: "Stand Ouro",
    img: require("../../assets/descricaoBanner.png"),
    description: "Stand amplo, ótima visibilidade e benefícios exclusivos para expositores.",
    price: "R$ 7.000,00"
  },
  {
    key: "prata",
    title: "Stand Prata",
    img: require("../../assets/descricaoBanner.png"),
    description: "Espaço funcional, boa localização e excelente custo-benefício.",
    price: "R$ 4.000,00"
  },
  {
    key: "bronze",
    title: "Stand Bronze",
    img: require("../../assets/descricaoBanner.png"),
    description: "Stand compacto, ideal para pequenas empresas e startups.",
    price: "R$ 2.000,00"
  },
  {
    key: "totem",
    title: "Totem",
    img: require("../../assets/descricaoBanner.png"),
    description: "Totem personalizado para divulgação de marca em pontos estratégicos do evento.",
    price: "R$ 800,00"
  }
];

export default function Collaborators() {
  const [activeTab, setActiveTab] = useState("diamante");

  const currentStand = stands.find(s => s.key === activeTab);

  return (
    <>
      <div className="collaborators-hero">
        <h2>Seja um colaborador</h2>
      </div>
      <section className="collaborators-container">
      <h2>Colaboradores</h2>
      <p>
        Participe do AGROAMAZONAS & DEFESA AGROPECUÁRIA como expositor e conecte sua marca ao maior evento agropecuário do Amazonas. Apresente seus produtos e serviços a um público qualificado, fortaleça seu nome no setor, amplie oportunidades de negócio e associe sua empresa à inovação, sustentabilidade e segurança alimentar. Em um ambiente estratégico e com alta visibilidade, sua marca fará parte da celebração dos 13 anos da ADAF e do futuro do agro no estado. Seja protagonista desse movimento!      </p>
      <h2>Stands</h2>
      <div className="stand-tabs">
        {stands.map(stand => (
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
        <img src={currentStand.img} alt={currentStand.title} className="stand-img" />
        <div className="stand-info">
          <h3>{currentStand.title}</h3>
          <p>{currentStand.description}</p>
          <span className="stand-price">{currentStand.price}</span>
        </div>
      </div>
    </section>
    </>
    
  );
}