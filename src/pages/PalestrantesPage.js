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
