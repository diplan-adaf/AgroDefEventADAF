import Carousel from "../components/carousel/Carousel";
import "./AgroAmazonasSite.css";
import Feature from "../components/feature/Feature";
import Benefits from "../components/benefits/Benefits";
import Location from "../components/location/Location";
import About from "../components/aboutUs/about";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Content from "../components/content/Content";
import Palestrantes from "../components/palestrantes/palestrantes";
import Collaborators from "../components/collaborators/Collaborators";
import { Instagram } from "lucide-react";

import standImg1 from "../assets/saida-1.svg";
import standImg2 from "../assets/saida-2.svg";
import standImg3 from "../assets/saida-3.svg";
import standImg4 from "../assets/saida-4.svg";
import standImg5 from "../assets/saida-5.svg";
import standImg6 from "../assets/saida-6.svg";
import standImg7 from "../assets/saida-7.svg";
import standImg8 from "../assets/saida-8.svg";
import standPlanta1 from "../assets/planta-1.svg"
import standPlanta2 from "../assets/planta-2.svg"
export default function AgroAmazonasSite() {

    const stands = [
    { src: standImg1, alt: "Foto 1" },
    { src: standImg2, alt: "Foto 2" },
    { src: standImg3, alt: "Foto 3" },
    { src: standImg4, alt: "Foto 4" },
    { src: standImg5, alt: "Foto 5" },
    { src: standImg6, alt: "Foto 6" },
    { src: standImg7, alt: "Foto 7" },
    { src: standImg8, alt: "Foto 8" }
  ];


  const standsPlanta = [
    { src: standPlanta1, alt: "Foto 1" },
    { src: standPlanta2, alt: "Foto 2" },
  ]

  return (
    <div className="site-container">
      <Layout>
        <Hero className="flex-item" />
        <section id="event">
          <Feature className="flex-item" />
        </section>


        <section id="benefits">
          <Benefits className="flex-item" />
        </section>

        <section>
          <Content className="flex-item" />
        </section>
        
        <section id="location">
          <Location className="flex-item" />
        </section>

        <section id="palestrantes">
          <Palestrantes className="flex-item" />
        </section>

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

        

        <section id="collaborators">
          <Collaborators className="flex-item" />
        </section>

        {/* <section>
          <Carousel className="flex-item" images={stands} title="STANDS" />
        </section> */}

        <section>
          <Carousel className="flex-item" images={standsPlanta} title="POSIÇÃO DOS STANDS" />
        </section>

        <a
            href="https://forms.gle/fp6bfcybtcYaoTKo8"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            id="button-stand"
          >
            Garanta seu Stand
        </a>

        <section id="about">
          <About className="flex-item" />
        </section>
      </Layout>
    </div>
  );
}
