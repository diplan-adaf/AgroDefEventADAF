import { Instagram } from "lucide-react";

export default function Header() {
  return (
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
  );
}
