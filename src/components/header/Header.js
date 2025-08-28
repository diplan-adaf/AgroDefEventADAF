import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import regua from "../../assets/imgs/realizacao/ReguaBrancaRealizacao.svg";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Função para scroll suave para seções
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    closeMenu();
  };

  // Função para navegar para seções na página principal
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      // Se não estiver na página principal, navega para ela com a seção
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  // Função para navegar para a página inicial
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Se já estiver na página inicial, scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se não estiver na página inicial, navega para ela
      navigate('/');
    }
    closeMenu();
  };

  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className={`nav-brand ${isMenuOpen ? "hide-brand" : ""}`}>
          <img src={regua} alt="Agro Amazonas" />
        </div>
        
        {/* Menu desktop */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={handleHomeClick} className="nav-section-btn">Evento</button>  
          <Link to="/palestrantes" onClick={closeMenu}>Palestrantes</Link>
          <a href="https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161" onClick={closeMenu} target="_blank" rel="noreferrer">Inscreva-se</a>
          <button onClick={() => handleSectionClick('collaborators')} className="nav-section-btn">Stands</button>
          <button onClick={() => handleSectionClick('about')} className="nav-section-btn">Sobre nós</button>
        </div>

        {/* Botão mobile */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
