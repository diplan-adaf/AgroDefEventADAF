import React, { useState } from "react";
import "./PalestrantesPage.css";
import Layout from "../components/Layout";
import Card from "../components/card/Card";

import palestranteBruno from "../assets/brunoHenrique.JPG";
import palestranteAbrahim from "../assets/abrahimSena.jpeg";
import avatarPlaceHolder from "../assets/avatarPlaceholder.jpg";

export default function PalestrantesPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      nome: "Me. Abrahim Sena Baze Junior",
      foto: palestranteAbrahim,
      tema: "Valorização da Gastronomia Amazônica na Cadeia do Agro",
      horario: "08:00 - 09:00",
      sala: "Palco Principal",
      descricao: "Especialista em gastronomia amazônica e cadeia produtiva do agronegócio regional."
    },
    {
      id: 2,
      nome: "Dr. Bruno Henrique dos Santos",
      foto: palestranteBruno,
      tema: "Segurança dos Alimentos na Era da Sustentabilidade: Desafios e Oportunidades",
      horario: "09:30 - 10:30",
      sala: "Palco Principal",
      descricao: "Doutor em segurança alimentar e sustentabilidade na produção agropecuária."
    },
    {
      id: 3,
      nome: "Dra. Ana Maria Nobrega",
      foto: avatarPlaceHolder,
      tema: "Inovação Tecnológica na Agricultura Amazônica",
      horario: "11:00 - 12:00",
      sala: "Auditório A",
      descricao: "Pesquisadora especializada em tecnologias inovadoras para o desenvolvimento sustentável da agricultura."
    },
    {
      id: 4,
      nome: "Prof. Francisco Lourenço",
      foto: avatarPlaceHolder,
      tema: "Defesa Sanitária Animal e Vegetal",
      horario: "14:00 - 15:00",
      sala: "Auditório B",
      descricao: "Professor e especialista em defesa sanitária e controle de pragas e doenças."
    },
    {
      id: 5,
      nome: "Dr. Geraldo Silva",
      foto: avatarPlaceHolder,
      tema: "Exportação e Mercado Internacional",
      horario: "15:30 - 16:30",
      sala: "Palco Principal",
      descricao: "Consultor internacional especializado em comércio exterior e certificações."
    },
    {
      id: 6,
      nome: "Dra. Glauco Mendes",
      foto: avatarPlaceHolder,
      tema: "Sustentabilidade e Meio Ambiente",
      horario: "17:00 - 18:00",
      sala: "Auditório A",
      descricao: "Especialista em práticas sustentáveis e conservação ambiental na agricultura."
    },
    {
      id: 7,
      nome: "Dr. Michel Silva",
      foto: avatarPlaceHolder,
      tema: "Tecnologia e Agricultura 4.0",
      horario: "08:30 - 09:30",
      sala: "Auditório C",
      descricao: "Especialista em tecnologias digitais aplicadas à agricultura moderna."
    },
    {
      id: 8,
      nome: "Dra. Raquel Silva",
      foto: avatarPlaceHolder,
      tema: "Qualidade e Certificação de Produtos",
      horario: "10:00 - 11:00",
      sala: "Auditório B",
      descricao: "Consultora em qualidade e certificação de produtos agropecuários."
    }
  ];

  return (
    <Layout>
      <div className="palestrantes-page">
        <Card title={"Palestrantes"}>
          <h2 className="page-title">Programação de Palestrantes</h2>
          <p className="page-description">
            Conheça os especialistas que irão compartilhar conhecimento e experiências 
            sobre defesa agropecuária, inovação tecnológica e sustentabilidade na agricultura amazônica.
          </p>

          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="speaker-card"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="speaker-photo">
                  <img src={speaker.foto} alt={speaker.nome} />
                </div>
                <div className="speaker-info">
                  <h3 className="speaker-name">{speaker.nome}</h3>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {selectedSpeaker && (
          <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                aria-label="Fechar"
                onClick={() => setSelectedSpeaker(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="modal-header">
                <div className="modal-foto-container">
                  <img src={selectedSpeaker.foto} alt={selectedSpeaker.nome} />
                </div>
                <div className="modal-info">
                  <h2 className="modal-nome">{selectedSpeaker.nome}</h2>
                  <p className="modal-descricao">{selectedSpeaker.descricao}</p>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Tema</span>
                    <p className="detail-value">{selectedSpeaker.tema}</p>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-label">Horário</span>
                    <p className="detail-value">{selectedSpeaker.horario}</p>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-label">Local</span>
                    <p className="detail-value">{selectedSpeaker.sala}</p>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <a
                    className="inscreva-se-btn"
                    href="https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inscreva-se
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
