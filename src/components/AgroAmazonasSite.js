import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import Carousel from "./Carousel";
import "./AgroAmazonasSite.css";

export default function AgroAmazonasSite() {
  return (
    <div className="site-container">
      <header className="site-header">
        <h1 className="site-title">AGRO & DEFESA</h1>
        <h2 className="site-subtitle">Amazonas • Agropecuária</h2>
        <p className="site-description">
          Alimentos seguros, mercados abertos e saúde protegida.
        </p>
        <div className="site-buttons">
          <a
            href="https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Inscreva-se (Sympla)
          </a>
          <a
            href="https://www.instagram.com/agro_defesa_evento/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link instagram"
          >
            <Instagram className="icon" /> Instagram
          </a>
        </div>
      </header>

      <section className="carousel-section">
        <Carousel />
      </section>

      <footer className="site-footer">
        <h3 className="footer-title">Fale conosco</h3>
        <div className="footer-contact">
          <p><Phone className="icon" /> (92) 8113-6607 | (92) 9330-6826 | (92) 9160-7182 | (92) 9195-2657</p>
          <p><Mail className="icon" /> agrodefesaevento@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
