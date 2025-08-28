import { useState, useEffect } from "react";
import "../components/palestrantes/palestrantes.css";
import "./PalestrantesPage.css";

import Layout from "../components/Layout";
import { palestrantes } from "../data/Palestrante";

export default function PalestrantesPage() {
  const [activeTab, setActiveTab] = useState("02-09");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [activeTab]);


  return (
    <div className="site-container">
      <Layout>
        <div className="container">
          <h1 className="page-title">Programação de Palestrantes</h1>
          <p>
            As palestras ocorrerão nos dias <strong>02 e 03 de Setembro </strong>  
            e acontecerão em quatro salas distintas, de forma simultânea, das <strong>10h00 às 19h30</strong>,
            com intervalos de 30 minutos entre as apresentações para melhor organização e interação do público.
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
