import "./location.css";
import { MapPin } from "lucide-react";
export default function Location() {
  return (
    <div className="location-container">
      <h1>2 e 3 de Setembro</h1>
      <p>No centro de convenções Vasco Vasques | Etapa 1</p>
      <a
          href="https://www.instagram.com/agro_defesa_evento/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <MapPin className="icon" /> Acessar a localização do Evento
      </a>
    </div>
  );
}
