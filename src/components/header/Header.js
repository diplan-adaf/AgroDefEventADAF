import { Instagram } from "lucide-react";
import "./header.css";

export default function Header() {
  return (
      <header className="site-header">
        <nav className="site-nav">
          <a href="#event">Evento</a>
          <a href="#about">Sobre nós</a>
          <a href="#subscribe">Inscreva-se</a>
          <a href="#location">Localização</a>
        </nav>
      </header>
  );
}
