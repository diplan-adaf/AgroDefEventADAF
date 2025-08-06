import "./hero.css";
import descricaoBanner from "../../assets/descricaoBanner.png";
import { Instagram } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="hero-img">
        <img src={descricaoBanner} alt="Hero" />
        <span>2 a 3 de Setembro - Vasco Vasques | Etapa 1</span>
        <a
            href="https://www.instagram.com/agro_defesa_evento/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <Instagram className="icon" /> Acompanhe-nos
        </a>
      </div>
    </>
      
  );
}
