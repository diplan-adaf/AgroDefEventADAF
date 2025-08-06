import React, { useState } from "react";
import "./palestrantes.css";

export default function Palestrantes() {
  const [activeTab, setActiveTab] = useState("02-09");

  const palestrantes = {
    "02-09": [
      {
        horario: "08:00 - 09:00",
        palestrantes: [
          {
            nome: "Dr. João Silva",
            foto: "https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=Dr.+João",
            formacao: "Doutor em Agronomia - UFAM",
            tema: "Inovações em Defesa Agropecuária"
          },
          {
            nome: "Dra. Maria Santos",
            foto: "https://via.placeholder.com/150x150/10B981/FFFFFF?text=Dra.+Maria",
            formacao: "Pós-doutora em Fitopatologia - EMBRAPA",
            tema: "Controle Biológico de Pragas"
          }
        ]
      },
      {
        horario: "10:00 - 11:00",
        palestrantes: [
          {
            nome: "Prof. Carlos Oliveira",
            foto: "https://via.placeholder.com/150x150/F59E0B/FFFFFF?text=Prof.+Carlos",
            formacao: "Professor Titular - INPA",
            tema: "Sustentabilidade na Agricultura"
          },
          {
            nome: "Eng. Ana Costa",
            foto: "https://via.placeholder.com/150x150/EF4444/FFFFFF?text=Eng.+Ana",
            formacao: "Engenheira Agrônoma - IFAM",
            tema: "Tecnologias de Precisão"
          }
        ]
      },
      {
        horario: "14:00 - 15:00",
        palestrantes: [
          {
            nome: "Dr. Roberto Lima",
            foto: "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=Dr.+Roberto",
            formacao: "Doutor em Zootecnia - UEA",
            tema: "Sanidade Animal na Amazônia"
          },
          {
            nome: "Dra. Fernanda Rocha",
            foto: "https://via.placeholder.com/150x150/EC4899/FFFFFF?text=Dra.+Fernanda",
            formacao: "Pós-doutora em Veterinária - UFAM",
            tema: "Prevenção de Doenças"
          }
        ]
      }
    ],
    "03-09": [
      {
        horario: "08:00 - 09:00",
        palestrantes: [
          {
            nome: "Dr. Pedro Alves",
            foto: "https://via.placeholder.com/150x150/06B6D4/FFFFFF?text=Dr.+Pedro",
            formacao: "Doutor em Entomologia - EMBRAPA",
            tema: "Manejo Integrado de Pragas"
          },
          {
            nome: "Dra. Juliana Mendes",
            foto: "https://via.placeholder.com/150x150/84CC16/FFFFFF?text=Dra.+Juliana",
            formacao: "Pós-doutora em Biologia - INPA",
            tema: "Biodiversidade e Agricultura"
          }
        ]
      },
      {
        horario: "10:00 - 11:00",
        palestrantes: [
          {
            nome: "Prof. Marcos Ferreira",
            foto: "https://via.placeholder.com/150x150/F97316/FFFFFF?text=Prof.+Marcos",
            formacao: "Professor Doutor - UFAM",
            tema: "Agricultura Familiar"
          },
          {
            nome: "Eng. Beatriz Nunes",
            foto: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Eng.+Beatriz",
            formacao: "Engenheira Florestal - IFAM",
            tema: "Sistemas Agroflorestais"
          }
        ]
      },
      {
        horario: "14:00 - 15:00",
        palestrantes: [
          {
            nome: "Dr. Ricardo Souza",
            foto: "https://via.placeholder.com/150x150/14B8A6/FFFFFF?text=Dr.+Ricardo",
            formacao: "Doutor em Economia Rural - UEA",
            tema: "Mercado e Comercialização"
          },
          {
            nome: "Dra. Camila Torres",
            foto: "https://via.placeholder.com/150x150/F43F5E/FFFFFF?text=Dra.+Camila",
            formacao: "Pós-doutora em Extensão Rural - UFAM",
            tema: "Assistência Técnica"
          }
        ]
      }
    ]
  };

  return (
    <div className="palestrantes-container">
      <h2>Palestrantes</h2>
      <p className="palestrantes-descricao">
        Conheça os renomados especialistas que irão compartilhar conhecimento e experiências 
        sobre defesa agropecuária, inovação tecnológica e sustentabilidade na agricultura amazônica. 
        Nossos palestrantes são referências em suas áreas de atuação, trazendo insights valiosos 
        para o desenvolvimento do setor agropecuário na região.
      </p>

      <h2>Cronograma</h2>
      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === "02-09" ? "active" : ""}`}
            onClick={() => setActiveTab("02-09")}
          >
            02/09 - Primeiro Dia
          </button>
          <button 
            className={`tab ${activeTab === "03-09" ? "active" : ""}`}
            onClick={() => setActiveTab("03-09")}
          >
            03/09 - Segundo Dia
          </button>
        </div>

        <div className="cronograma-content">
          {palestrantes[activeTab].map((sessao, index) => (
            <div key={index} className="sessao-palestra">
              <div className="horario">
                <span className="horario-texto">{sessao.horario}</span>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 