import React, { useState } from "react";
import "./palestrantes.css";
import palestrantes1 from "../../assets/palestrante1.jpeg";
import palestrantes2 from "../../assets/palestrante2.JPG";
import palestrantes3 from "../../assets/palestrante3.jpeg";
import palestrantes4 from "../../assets/palestrante4.jpeg";

export default function Palestrantes() {
  const [activeTab, setActiveTab] = useState("02-09");

  const palestrantes = {
    "02-09": [
      {
        horario: "08:00 - 09:00",
        palestrantes: [
          {
            nome: "Paulo Roberto de Faria Pinto",
            foto: palestrantes1,
            formacao: "Diretor do Departamento de Mudança Climática e Áreas Protegidas na Semmasclima e Conselheiro do Conselho Municipal de Desenvolvimento Urbano - CMDU",
            tema: "Inovações em Defesa Agropecuária"
          },
          {
            nome: "Dr. Bruno Henrique dos Santos",
            foto: palestrantes2,
            formacao: "Possui Doutorado em Ciência Animal pela Universidade Federal do Pará (UFPA), Mestrado em Ciência e Tecnologia de Alimentos pela Universidade Federal do Pará (UFPA), MBA Executivo em Alta Gestão de IES pela Universidade da Amazônia (UNAMA)",
            tema: "Segurança dos Alimentos na Era da Sustentabilidade: Desafios e Oportunidades"
          }
        ]
      },
      // {
      //   horario: "10:00 - 11:00",
      //   palestrantes: [
      //     {
      //       nome: "Prof. Carlos Oliveira",
      //       foto: "https://via.placeholder.com/150x150/F59E0B/FFFFFF?text=Prof.+Carlos",
      //       formacao: "Professor Titular - INPA",
      //       tema: "Sustentabilidade na Agricultura"
      //     },
      //     {
      //       nome: "Eng. Ana Costa",
      //       foto: "https://via.placeholder.com/150x150/EF4444/FFFFFF?text=Eng.+Ana",
      //       formacao: "Engenheira Agrônoma - IFAM",
      //       tema: "Tecnologias de Precisão"
      //     }
      //   ]
      // },
      // {
      //   horario: "14:00 - 15:00",
      //   palestrantes: [
      //     {
      //       nome: "Dr. Roberto Lima",
      //       foto: "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=Dr.+Roberto",
      //       formacao: "Doutor em Zootecnia - UEA",
      //       tema: "Sanidade Animal na Amazônia"
      //     },
      //     {
      //       nome: "Dra. Fernanda Rocha",
      //       foto: "https://via.placeholder.com/150x150/EC4899/FFFFFF?text=Dra.+Fernanda",
      //       formacao: "Pós-doutora em Veterinária - UFAM",
      //       tema: "Prevenção de Doenças"
      //     }
      //   ]
      // }
    ],
    "03-09": [
      {
        horario: "08:00 - 09:00",
        palestrantes: [
          {
            nome: "Joselena Tavares",
            foto: palestrantes3,
            formacao: " Engenheira Agrônoma, Fiscal Estadual Agropecuário e Especialista em Agricultura Familiar. Atualmente é mestranda em Desenvolvimento Rural e Gestão de Empreendimentos Agroalimentares pelo Instituto Federal de Educação do Pará (IFPA).",
            tema: "Empreendimentos agroalimentares de base familiar"
          },
          {
            nome: "Raquel Silva e Sousa",
            foto: palestrantes4,
            formacao: "Raquel Silva e Sousa é Médica Veterinária formada pelo Centro Universitário do Norte – UNINORTE (2021) e pós-graduada em Clínica Médica de Pequenos Animais pela FAMESP (2024).Atua também na coordenação e organização de ligas acadêmicas e eventos científicos, como o I Simpósio Acadêmico de Medicina Veterinária – SAMVET/UNINORTE (2025).",
            tema: "Biotecnologia da Reprodução Animal"
          }
        ]
      },
      // {
      //   horario: "10:00 - 11:00",
      //   palestrantes: [
      //     {
      //       nome: "Prof. Marcos Ferreira",
      //       foto: "https://via.placeholder.com/150x150/F97316/FFFFFF?text=Prof.+Marcos",
      //       formacao: "Professor Doutor - UFAM",
      //       tema: "Agricultura Familiar"
      //     },
      //     {
      //       nome: "Eng. Beatriz Nunes",
      //       foto: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Eng.+Beatriz",
      //       formacao: "Engenheira Florestal - IFAM",
      //       tema: "Sistemas Agroflorestais"
      //     }
      //   ]
      // },
      // {
      //   horario: "14:00 - 15:00",
      //   palestrantes: [
      //     {
      //       nome: "Dr. Ricardo Souza",
      //       foto: "https://via.placeholder.com/150x150/14B8A6/FFFFFF?text=Dr.+Ricardo",
      //       formacao: "Doutor em Economia Rural - UEA",
      //       tema: "Mercado e Comercialização"
      //     },
      //     {
      //       nome: "Dra. Camila Torres",
      //       foto: "https://via.placeholder.com/150x150/F43F5E/FFFFFF?text=Dra.+Camila",
      //       formacao: "Pós-doutora em Extensão Rural - UFAM",
      //       tema: "Assistência Técnica"
      //     }
      //   ]
      // }
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