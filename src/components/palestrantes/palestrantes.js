import React, { useState } from "react";
import "./palestrantes.css";
import palestrantes1 from "../../assets/pauloRoberto.jpeg";
import palestrantes2 from "../../assets/brunoHenrique.JPG";
import palestrantes3 from "../../assets/JoselenaTavares.jpeg";
import palestrantes4 from "../../assets/raquelSilva.jpeg";
import { Link } from "react-router-dom";

export default function Palestrantes() {
  const [activeTab, setActiveTab] = useState("02-09");

  const palestrantes = {
    "02-09": [
      {
        horario: "08:00 - 09:00",
        palestrantes: [
          {
            nome: "François Vieira da Silva Matos",
            foto: palestrantes4,
            tema: "Sistema gerenciamento em áreas Protegidas",
            sala: "Palco Principal"
          },
          {
            nome: "Dr. Bruno Henrique dos Santos",
            foto: palestrantes2,
            tema: "Segurança dos Alimentos na Era da Sustentabilidade: Desafios e Oportunidades",
            sala: "Palco Principal"
          },
        ]
      }
    ]
  };

  return (
    <div className="container">
      <h2>Palestrantes</h2>
      <p className="palestrantes-descricao">
        Conheça os renomados especialistas que irão compartilhar conhecimento e experiências 
        sobre defesa agropecuária, inovação tecnológica e sustentabilidade na agricultura amazônica. 
        Nossos palestrantes são referências em suas áreas de atuação, trazendo insights valiosos 
        para o desenvolvimento do setor agropecuário na região.
      </p>

      <div className="cronograma-container">

        <div className="cronograma-content">
          {palestrantes[activeTab].map((sessao, index) => (
            <div key={index} className="sessao-palestra">
              <div className="horario">
                {/* <span className="horario-texto">{sessao.horario}</span> */}
              </div>
              <div className="palestrantes-grid">
                {sessao.palestrantes.map((palestrante, palestranteIndex) => (
                  <div key={palestranteIndex} className="palestrante-card">
                    <div className="palestrante-foto">
                      <img 
                        src={palestrante.foto} 
                        alt={palestrante.nome}
                      />
                    </div>
                    <div className="palestrante-info">
                      <h3 className="palestrante-nome">{palestrante.nome}</h3>
                      <p className="palestrante-formacao">{palestrante.formacao}</p>
                      <p className="palestrante-tema">{palestrante.tema}</p>
                      <p className="palestrante-sala">
                        <span className="sala-badge">{palestrante.sala}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Link 
              to="/palestrantes" 
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#059669',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
            >
              Ver Programação Completa dos Palestrantes
          </Link>
        </div>
      </div>
    </div>
  );
} 