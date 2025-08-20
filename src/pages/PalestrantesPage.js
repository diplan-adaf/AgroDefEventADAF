import { useState, useEffect } from "react";
import "../components/palestrantes/palestrantes.css";
import "./PalestrantesPage.css";
import brunoHenrique from "../assets/imgs/palestrantes/DrBrunoHenrique.svg";
import joselenaTavares from "../assets/imgs/palestrantes/JoselenaTavares.svg";
import raquelSilva from "../assets/imgs/palestrantes/RaquelSilva.svg";
import anaMariaNobrega from "../assets/imgs/palestrantes/AnaMariaNobrega.svg";
import franciscoLoureco from "../assets/imgs/palestrantes/FranciscoLourenco.svg";
import pauloRoberto from "../assets/imgs/palestrantes/PauloRoberto.svg";
import geraldo from "../assets/imgs/palestrantes/GeraldoSousa.svg";
import glauco from "../assets/imgs/palestrantes/Glauco.svg";
import guilhermeSouza from "../assets/imgs/palestrantes/GuilhermeSousa.svg";
import michelSilva from "../assets/imgs/palestrantes/MichellDaSilva.svg";
import sivandro from "../assets/imgs/palestrantes/Silvandro.svg";
import wilson from "../assets/imgs/palestrantes/DrWilson.svg";
import diogoLima from "../assets/imgs/palestrantes/DiogoLima.svg";
import avatar from "../assets/avatarPlaceholder.webp";
import abrahimSena from "../assets/imgs/palestrantes/AbrahimSena.svg";
import marciaSeixas from "../assets/imgs/palestrantes/MarciaSeixas.svg";
import airton from "../assets/imgs/palestrantes/AirtonReisDeJesus.svg";
import silvanaPimentel from "../assets/imgs/palestrantes/SilvanaPimentel.svg";
import claudioEmanuel from "../assets/imgs/palestrantes/claudioEmanuel 1.svg";
import raianeAila from "../assets/imgs/palestrantes/RaianeAila.svg";
import pauloBarreto from "../assets/imgs/palestrantes/PauloBarreto.svg";
import pauloSergio from "../assets/imgs/palestrantes/PauloSergio.svg";
import anaFlavia from "../assets/imgs/palestrantes/AnaFlavia.svg";
import joaoVitor from "../assets/imgs/palestrantes/JoãoVictorCarneiro.svg";
import andrePrado from "../assets/imgs/palestrantes/AndrePadro.svg";
import adrianaOliveira from "../assets/imgs/palestrantes/AdrianaOliveira.svg";
import SergioRocha from "../assets/imgs/palestrantes/SergioRocha.svg";
import MicheleLins from "../assets/imgs/palestrantes/MichelleLins.svg";
import LarissaGomes from "../assets/imgs/palestrantes/LarissaGomes.svg";

import Layout from "../components/Layout";

export default function PalestrantesPage() {
  const [activeTab, setActiveTab] = useState("02-09");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [activeTab]);

  const palestrantes = {
    "02-09": [
      {
        horario: "10:00 - 11:00",
        palestrantes: [
          {
            nome: "Sivandro Campos",
            foto: sivandro,
            tema: "Panorama da Monilíase no Estado do Amazonas",
            sala: "Sala 2",
          },
          {
            nome: "Francisco Lourenço Junior",
            foto: franciscoLoureco,
            tema: "Conectando o Campo à Saúde: Inovações Digitais para um Amazonas mais Sustentável e Seguro",
            sala: "Sala 3",
          },
          {
            nome: "João Vitor Aquino Carneiro",
            foto: joaoVitor,
            tema: "Preenchimento de ART",
            sala: "Sala 1",
          },
          {
            nome: "Michele Lins Aracaty e Silva",
            foto: MicheleLins,
            tema: "Segurança Alimentar e Desenvolvimento Regional",
            sala: "Palco Principal",
          },
          {
            nome: "Larissa Gomes Silva de Souza",
            foto: LarissaGomes,
            tema: "Da Bancada ao Produto: O Papel da Análise de Alimentos no P&D",
            sala: "Sala 4",
          },
        ],
      },
      {
        horario: "11:00 - 12:00",
        palestrantes: [
          {
            nome: "Dr. Bruno Henrique dos Santos",
            foto: brunoHenrique,
            tema: "Segurança dos Alimentos na Era da Sustentabilidade: Desafios e Oportunidades",
            sala: "Palco Principal",
          },
        ],
      },
      {
        horario: "11:30 - 12:30",
        palestrantes: [
          {
            nome: "Guilherme Silva Rodrigues",
            foto: guilhermeSouza,
            tema: "Ações de Controle a Mosca da Carambola em Roraima (impactos na fruticultura)",
            sala: "Sala 2",
          },
          {
            nome: "André do Prado Oliveira",
            foto: andrePrado,
            tema: "Da Granja à mesa: Fatores para se obter um ovo de qualidade",
            sala: "Sala 4",
          },
        ],
      },
      {
        horario: "14:00 - 15:00",
        palestrantes: [
          {
            nome: "Adriana Aguiar Oliveira",
            foto: adrianaOliveira,
            tema: "Panorama do SISBI no Brasil",
            sala: "Sala 4",
            // profissão: "Auditoria federal fiscal agropecuária",
          },
          {
            nome: "Ana Maria Nóbrega",
            foto: anaMariaNobrega,
            tema: "Projeto Sanitarista Mirim - Roraima",
            sala: "Sala 2",
          },
          {
            nome: "Cláudio Emanuel Magalhães Gurgel",
            foto: claudioEmanuel,
            tema: "Boas práticas na Aplicação de Agrotóxicos",
            sala: "Sala 1",
          },
          {
            nome: "Márcia Seixas de Castro Bader",
            foto: marciaSeixas,
            tema: "A Saúde Única como Estratégia para a Defesa Agropecuária.",
            sala: "Sala 3",
          },
          {
            nome: "Sérgio Rocha Muniz",
            foto: SergioRocha,
            tema: "Regularização fundiária em áreas da suframa",
            sala: "Palco Principal",
          },
        ],
      },
      {
        horario: "15:30 - 16:30",
        palestrantes: [
          {
            nome: "Raquel Silva e Sousa",
            foto: raquelSilva,
            tema: "Uso Racional de Antimicrobianos em Ruminantes: Desafios Clínicos, Formação Acadêmica e Impactos na Segurança Alimentar",
            sala: "Sala 4",
          },
          {
            nome: "Wilson da Silva Moraes",
            foto: wilson,
            tema: "Ações do Plano Nacional de Prevenção e Vigilância da Fusariose da Bananeira - Raça 4 Tropical ( FOC R4T)",
            sala: "Sala 2",
          },
        ],
      },
      {
        horario: "17:00 - 18:00",
        palestrantes: [
          {
            nome: "Paulo Roberto de Faria Pinto",
            foto: pauloRoberto,
            tema: "Sistema gerenciamento em áreas Protegidas",
            sala: "Sala 2",
          },
          {
            nome: "Fernando Rodrigues da Silva",
            foto: avatar,
            tema: "Avaliação nas Linhas de Inspeção de Abatedouro",
            sala: "Sala 4",
          },
        ],
      },
      {
        horario: "18:30 - 19:30",
        palestrantes: [
          {
            nome: "Airton Reis de Jesus",
            foto: airton,
            tema: "Cadeia Produtiva da Carne no Amazonas",
            sala: "Sala 4",
          },
        ],
      },
    ],
    "03-09": [
      {
        horario: "10:00 - 11:00",
        palestrantes: [
          {
            nome: "Abrahim Sena Baze Junior",
            foto: abrahimSena,
            tema: "Valorização da Gastronomia Amazônica na Cadeia do Agro",
            sala: "Palco Principal",
          },
          {
            nome: "Fredson",
            foto: avatar,
            tema: "Recolhimento de embalagens",
            sala: "Sala 1",
          },
          {
            nome: "Paulo Barreto",
            foto: pauloBarreto,
            tema: "Sala de Classificação de ovos: cuidados, higienização, manutenção e calibração das maquinas de classificação",
            sala: "Sala 4",
          },
        ],
      },
      {
        horario: "11:30 - 12:30",
        palestrantes: [
          {
            nome: "Raiane Áila",
            foto: raianeAila,
            tema: "Populações expostas aos agrotóxicos",
            sala: "Sala 1",
          },
          {
            nome: "Ana Flávia Amâncio",
            foto: anaFlavia,
            tema: "Boas práticas de manipulação de alimentos",
            sala: "Sala 4",
          },
          {
            nome: "Glauco Antonio Teixeira",
            foto: glauco,
            tema: "Programa Nacional de Prevenção da Vassoura-de-Bruxa da Mandioca",
            sala: "Sala 2",
          },
        ],
      },
      {
        horario: "14:00 - 15:00",
        palestrantes: [
          {
            nome: "Michaell Silva",
            foto: michelSilva,
            tema: "Receituário agronômico, Cadastro de produtos, e Registro de estabelecimentos",
            sala: "Sala 1",
          },
          {
            nome: "Geraldo Souza Costa",
            foto: geraldo,
            tema: "Beneficiamento primário do cacau",
            sala: "Sala 2",
          },
        ],
      },
      {
        horario: "15:30 - 16:30",
        palestrantes: [
          {
            nome: "Silvana Pimentel",
            foto: silvanaPimentel,
            tema: "Licenciamento de Estabelecimento de comercio de agrotóxicos",
            sala: "Sala 1",
          },
          {
            nome: "Paulo Sérgio",
            foto: pauloSergio,
            tema: "A Atuação Prática do Acadêmico de Medicina Veterinária no Amazonas",
            sala: "Sala 3",
          },
          {
            nome: "Joselena Tavares",
            foto: joselenaTavares,
            tema: "Selo de Produção Artesanal da Adepará e Requisitos para Regularização Higiênico-Sanitária de Estabelecimentos de Produtos de Origem Vegetal do Estado do Pará",
            sala: "Sala 2",
          },
        ],
      },
      {
        horario: "18:30 - 19:30",
        palestrantes: [
          {
            nome: "Diogo de Lima Franco",
            foto: diogoLima,
            tema: "Experiencia de abate de Jacaré no Mamirawá",
            sala: "Sala 4",
          },
        ],
      },
    ],
  };

  return (
    <div className="site-container">
      <Layout>
        <div className="container">
          <h1 className="page-title">Programação de Palestrantes</h1>
          {/* <p className="palestrantes-descricao">
            Conheça os renomados especialistas que irão compartilhar conhecimento e experiências 
            sobre defesa agropecuária, inovação tecnológica e sustentabilidade na agricultura amazônica. 
            Nossos palestrantes são referências em suas áreas de atuação, trazendo insights valiosos 
            para o desenvolvimento do setor agropecuário na região.
          </p> */}

          <p>
            O evento é aberto ao público e voltado para{" "}
            <strong>produtores rurais</strong>,{" "}
            <strong>empresários do agronegócio</strong>,
            <strong>instituições governamentais</strong> e{" "}
            <strong>universitários</strong>. Cada palestra contará com a emissão
            de <strong>certificado de participação</strong>, que poderá ser
            utilizado por universitários como{" "}
            <strong>horas complementares</strong> em sua formação acadêmica.
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
                    {sessao.palestrantes.map(
                      (palestrante, palestranteIndex) => (
                        <div
                          key={palestranteIndex}
                          className="palestrante-card"
                        >
                          <div className="palestrante-foto">
                            <img
                              src={palestrante.foto}
                              alt={palestrante.nome}
                            />
                          </div>
                          <div className="palestrante-info">
                            <h3 className="palestrante-nome">
                              {palestrante.nome}
                            </h3>
                            <p className="palestrante-tema">
                              <strong>Tema:</strong> {palestrante.tema}
                            </p>
                            <p className="palestrante-sala">
                              <span className="sala-badge-page">
                                {palestrante.sala}
                              </span>
                            </p>
                          </div>

                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdqJDjN4tujp3fRNAFnXfyL9jpGuyuvJGPvxIFlf0yPdD-hWQ/viewform"
                            className="button-subscribe"
                            target="_blank"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

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
          </div>
        </div>
      </Layout>
    </div>
  );
}
