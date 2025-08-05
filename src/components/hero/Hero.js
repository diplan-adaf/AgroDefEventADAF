import "./hero.css";
import descricaoBanner from "../../assets/descricaoBanner.png";

export default function Hero() {
  return (
    <>
      <div className="hero-img">
        <img src={descricaoBanner} alt="Hero" />
      </div>
    </>
      
  );
}
