import React, { useState } from "react";
import "../components/palestrantes/palestrantes.css";
import "./PalestrantesPage.css";
import brunoHenrique from "../assets/brunoHenrique.JPG";
import joselenaTavares from "../assets/JoselenaTavares.jpeg";
import raquelSilva from "../assets/raquelSilva.jpeg";
import anaMariaNobrega from "../assets/anaMariaNobrega.png"
import franciscoLoureco from "../assets/franciscoLourenco.png"
import geraldo from "../assets/geraldo.png"
import glauco from "../assets/glauco.png"
import guilhermeSouza from "../assets/guilhermeSouza.png"
import michelSilva from "../assets/michelSilva.png"
import sivandro from "../assets/sivandro.png"
import wilson from "../assets/wilson.png"
import avatar from "../assets/avatarPlaceholder.jpg"

import Layout from "../components/Layout";

export default function PalestrantesPage() {
  const [activeTab, setActiveTab] = useState("02-09");

const palestrantes = {
  "02-09": [
    {
      horario: "10:00",
      palestrantes: [
        {
          nome: "Ludimila Saboya",
          foto: avatar,
          tema: "A definir",
          sala: "Sala 4"
        },
        {
          nome: "Sivandro Campos",
          foto: sivandro,
          tema: "Panorama da Monilíase no Estado do Amazonas",
          sala: "Sala 2"
        }
      ]
    },
    {
      horario: "11:00",
      palestrantes: [
        {
          nome: "Dr. Bruno Henrique dos Santos",
          foto: brunoHenrique,
          tema: "Segurança dos Alimentos na Era da Sustentabilidade: Desafios e Oportunidades",
          sala: "Principal"
        },
        {
          nome: "André Dupadro",
          foto: avatar,
          tema: "Da granja à mesa: fatores para se obter um ovo",
          sala: "Sala 4"
        }
      ]
    },
    {
      horario: "11:30",
      palestrantes: [
        {
          nome: "Guilherme Silva Rodrigues",
          foto: guilhermeSouza,
          tema: "Ações de Controle a Mosca da Carambola em Roraima (impactos na fruticultura)",
          sala: "Sala 2"
        }
      ]
    },
    {
      horario: "12:00",
      palestrantes: [
        {
          nome: "François Vieira da Silva Matos",
          foto: avatar,
          tema: "Sistema gerenciamento em áreas Protegidas",
          sala: "Principal"
        }
      ]
    },
    {
      horario: "14:00",
      palestrantes: [
        {
          nome: "Adriana Aguiar Oliveira",
          foto: avatar,
          tema: "Panorama do SISBI no Brasil",
          sala: "Sala 4"
        },
        {
          nome: "Ana Maria Nóbrega",
          foto: anaMariaNobrega,
          tema: "Projeto Sanitarista Mirim - Roraima",
          sala: "Sala 2"
        },
        {
          nome: "Cláudio Silva",
          foto: avatar,
          tema: "Boas práticas na Aplicação de Agrotóxicos",
          sala: "Sala 1"
        }
      ]
    },
    {
      horario: "15:30",
      palestrantes: [
        {
          nome: "Raquel Silva e Sousa",
          foto: raquelSilva,
          tema: "Uso Racional de Antimicrobianos em Ruminantes: Desafios Clínicos, Formação Acadêmica e Impactos na Segurança Alimentar",
          sala: "Sala 4"
        },
        {
          nome: "Wilson da Silva Moraes",
          foto: wilson,
          tema: "Ações do Plano Nacional de Prevenção e Vigilância da Fusariose da Bananeira - Raça 4 Tropical ( FOC R4T)",
          sala: "Sala 2"
        }
      ]
    },
    {
      horario: "17:00",
      palestrantes: [
        {
          nome: "Fernando Rodrigues da Silva",
          foto: avatar,
          tema: "Avaliação nas Linhas de Inspeção de Abatedouro",
          sala: "A definir"
        }
      ]
    },
    {
      horario: "18:00",
      palestrantes: [
        {
          nome: "Airton Reis de Jesus",
          foto: avatar,
          tema: "Cadeia Produtiva da Carne no Amazonas",
          sala: "A definir"
        }
      ]
    }
  ],
  "03-09": [
    {
      horario: "10:00",
      palestrantes: [
        {
          nome: "Fredson",
          foto: avatar,
          tema: "Recolhimento de embalagens",
          sala: "Sala 1"
        },
        {
          nome: "Paulo Barreto",
          foto: avatar,
          tema: "Sala de Classificação de ovos: cuidados, higienização, manutenção e calibração das maquinas de classificação",
          sala: "Sala 4"
        }
      ]
    },
    {
      horario: "11:30",
      palestrantes: [
        {
          nome: "Raiane Áila",
          foto: avatar,
          tema: "Populações expostas aos agrotóxicos",
          sala: "Sala 1"
        },
        {
          nome: "Ana Flávia Amâncio",
          foto: avatar,
          tema: "Boas práticas de manipulação de alimentos",
          sala: "Sala 4"
        },
        {
          nome: "Glauco Antonio Teixeira",
          foto: glauco,
          tema: "Programa Nacional de Prevenção da Vassoura-de-Bruxa da Mandioca",
          sala: "Sala 2"
        }
      ]
    },
    {
      horario: "14:00",
      palestrantes: [
        {
          nome: "Michaell Silva",
          foto: michelSilva,
          tema: "Receituário agronômico, Cadastro de produtos, e Registro de estabelecimentos",
          sala: "Sala 1"
        },
        {
          nome: "Aloisio de Souza Sabença",
          foto: avatar,
          tema: "A definir",
          sala: "Sala 4"
        },
        {
          nome: "Geraldo Souza Costa",
          foto: geraldo,
          tema: "Beneficiamento primário do cacau",
          sala: "Sala 2"
        }
      ]
    },
    {
      horario: "15:30",
      palestrantes: [
        {
          nome: "Silvana",
          foto: avatar,
          tema: "Licenciamento de Estabelecimento de comercio de agrotóxicos",
          sala: "Sala 1"
        },
        {
          nome: "Ana Elisa Almeida",
          foto: avatar,
          tema: "A definir",
          sala: "Sala 4"
        },
        {
          nome: "Paulo Sérgio",
          foto: avatar,
          tema: "A Atuação Prática do Acadêmico de Medicina Veterinária no Amazonas",
          sala: "Sala 3"
        },
        {
          nome: "Joselena C. Tavares",
          foto: joselenaTavares,
          tema: "Selo de Produção Artesanal da Adepará e Requisitos para Regularização Higiênico-Sanitária de Estabelecimentos de Produtos de Origem Vegetal do Estado do Pará",
          sala: "Sala 2"
        }
      ]
    },
    {
      horario: "17:00",
      palestrantes: [
        {
          nome: "Josélio Andrade Moura",
          foto: avatar,
          tema: "A definir",
          sala: "Sala 4"
        }
      ]
    },
    {
      horario: "18:30",
      palestrantes: [
        {
          nome: "Diogo Lima",
          foto: avatar,
          tema: "Experiencia de abate de Jacaré no Mamirawá",
          sala: "Sala 4"
        }
      ]
    }
  ]
};

  return (
    <div className="site-container">
      <Layout>
        <div className="container">
          <h1 className="page-title">Programação de Palestrantes</h1>
          <p className="palestrantes-descricao">
            Conheça os renomados especialistas que irão compartilhar conhecimento e experiências 
            sobre defesa agropecuária, inovação tecnológica e sustentabilidade na agricultura amazônica. 
            Nossos palestrantes são referências em suas áreas de atuação, trazendo insights valiosos 
            para o desenvolvimento do setor agropecuário na região.
          </p>

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
                  <div className="horario-sessao">
                    <h3 className="horario-titulo">{sessao.horario}</h3>
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
                          <p className="palestrante-tema"><strong>Tema:</strong> {palestrante.tema}</p>
                          <p className="palestrante-sala">
                            <span className="sala-badge">{palestrante.sala}</span>
                          </p>
                        </div>

                        <a className="button-subscribe">
                          Inscreva-se
                        </a>

                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
} 