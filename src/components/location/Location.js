import "./location.css";
import { MapPin } from "lucide-react";
export default function Location() {
  return (
    <div className="location-container">
      <h2>2 e 3 de Setembro</h2>
      <p>No centro de convenções Vasco Vasques | Etapa 1</p>
      <a
          href="https://maps.app.goo.gl/9ZKNZ9aeYfZzSkwi7"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <MapPin className="icon" /> Acessar a localização do Evento
      </a>
    </div>
  );
}
