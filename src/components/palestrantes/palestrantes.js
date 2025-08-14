import React, { useState } from "react";
import "./palestrantes.css";
import palestrantes2 from "../../assets/brunoHenrique.JPG";
import avatarPlaceHolder from "../../assets/avatarPlaceholder.jpg"
import abrahimSena from "../../assets/abrahimSena.jpeg";

import { Link } from "react-router-dom";
import Card from "../card/Card";

export default function Palestrantes() {
  const [activeTab, setActiveTab] = useState("02-09");

  const palestrantes = {
    "02-09": [
      {
        horario: "08:00 - 09:00",
        palestrantes: [
          {
            nome: "Me. Abrahim Sena Baze Junior",
            foto: abrahimSena,
            tema: "Valorização da Gastronomia Amazônica na Cadeia do Agro",
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
    <Card title={"Palestrantes"}>
      <p>
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
                      <p className="palestrante-tema"><strong>Tema: </strong>{palestrante.tema}</p>
                      <p className="palestrante-sala">
                        <span className="sala-badge-palestrantes">{palestrante.sala}</span>
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
                padding: '2rem 2rem',
                backgroundColor: '#059669',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
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


    </Card>
  );
} 