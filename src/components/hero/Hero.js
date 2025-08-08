import "./hero.css";
import descricaoBanner from "../../assets/descricaoBanner.png";
import { Instagram } from "lucide-react";
import Button from "../button/Button";
export default function Hero() {
  return (
    <>
      <div className="hero-img">
        <img src={descricaoBanner} alt="Hero" />
        <span>2 a 3 de Setembro - Vasco Vasques | Etapa 1</span>
        <Button text={"Acompanhe-nos"} ref={"https://www.instagram.com/agro_defesa_evento/"} cls={"instagram-hero"}>
          <Instagram className="icon" />
        </Button>
      </div>
    </>
      
  );
}
