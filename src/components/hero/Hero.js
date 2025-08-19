import "./hero.css";
import descricaoBanner from "../../assets/logoAgroDefesa.svg";
import { Instagram } from "lucide-react";
import Button from "../button/Button";
export default function Hero() {
  return (
    <>
      <div className="hero-img">
        <img src={descricaoBanner} alt="Hero" />
        <span>2 e 3 de Setembro - Vasco Vasques | Etapa 1</span>
        <Button text={"Acompanhe-nos"} ref={"https://www.instagram.com/agro_defesa_evento/?igsh=MXRoeTRkaDJuNHRtZw%3D%3D"} cls={"instagram-hero"}>
          <Instagram className="icon" />
        </Button>
      </div>
    </>
      
  );
}
