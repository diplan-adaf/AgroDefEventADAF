import "./hero.css";
import descricaoBanner from "../../assets/descricaoBanner.png";
import { Instagram } from "lucide-react";
import Button from "../button/Button";
export default function Hero() {
  return (
    <>
      <div className="hero-img">
        <img src={descricaoBanner} alt="Hero" />

        <div className="hero-description">
          <span id="description-one">ALIMENTOS SEGUROS, MERCADOS ABERTOS </span>
          <br />
          <span id="description-two">E SAÚDE PROTEGIDA</span>
        </div>

        

        <span className="hero-data">2 e 3 de Setembro - Vasco Vasques | Etapa 1</span>
      </div>
    </>
      
  );
}
