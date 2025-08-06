import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import "./header.css";
import adaf from "../../assets/adaf.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className={`nav-brand ${isMenuOpen ? "hide-brand" : ""}`}>
          <img src={adaf} alt="Agro Amazonas" />
        </div>
        
        {/* Menu desktop */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#event" onClick={closeMenu}>Evento</a>
          <a href="#about" onClick={closeMenu}>Sobre nós</a>
          <a href="#benefits" onClick={closeMenu}>Inscreva-se</a>
          <a href="#location" onClick={closeMenu}>Localização</a>
        </div>

        {/* Botão mobile */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
