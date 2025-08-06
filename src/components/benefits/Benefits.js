
import "./benefits.css";
import { Instagram } from "lucide-react";

export default function Benefits() {
  return (
    <div className="benefits-container">
      <h2>O QUE OFERECEMOS?</h2>
      <div className="benefits-card">
        <ul>
            <li>Mais de 140 estandes com expositores de toda a cadeia produtiva.</li>
            <li>Palestras, workshops e talk shows com mais de 40 especialistas</li>
            <li>Área gastronômica com produtos regionais.</li>
            <li>Espaço para negócios, oportunidades e parcerias.</li>
            <li>Estandes de instituições de pesquisa como EMBRAPA, INPA, UFAM, IFAM e UEA.</li>
            <li>Acesso a informações sobre inspeção sanitária, exportação, uso de agrotóxicos, prevenção de doenças como  febre aftosa e muito mais!</li>
        </ul>
      </div>
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
                    <a
            href="https://forms.gle/fp6bfcybtcYaoTKo8"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Garanta seu Stand
          </a>

        </div>
    </div>
  );
}