import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/"} onClick={closeMenu}>Evento</Link>  
          <Link to="/palestrantes" onClick={closeMenu}>Palestrantes</Link>
          <a href="https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161" onClick={closeMenu} target="_blank">Inscreva-se</a>
          <a href="#stands" onClick={closeMenu}>Stands</a>
          <a href="#about" onClick={closeMenu}>Sobre nós</a>
        </div>

        {/* Botão mobile */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
