import Carousel from "../components/carousel/Carousel";
import "./AgroAmazonasSite.css";
import Feature from "../components/feature/Feature";
import Benefits from "../components/benefits/Benefits";
import Location from "../components/location/Location";
import About from "../components/aboutUs/about";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Content from "../components/content/Content";
import Palestrantes from "../components/palestrantes/palestrantes";
import Collaborators from "../components/collaborators/Collaborators";
import { Instagram } from "lucide-react";

import standImg1 from "../assets/saida-1.svg";
import standImg2 from "../assets/saida-2.svg";
import standImg3 from "../assets/saida-3.svg";
import standImg4 from "../assets/saida-4.svg";
import standImg5 from "../assets/saida-5.svg";
import standImg6 from "../assets/saida-6.svg";
import standImg7 from "../assets/saida-7.svg";
import standImg8 from "../assets/saida-8.svg";
import standPlanta1 from "../assets/planta-1.svg"
import standPlanta2 from "../assets/planta-2.svg"

export default function AgroAmazonasSite() {

    const stands = [
    { 
      src: standImg1, 
      alt: "Stand Diamante", 
      title: "Stand Diamante",
      description: "O stand mais exclusivo do evento, com mobiliário premium e localização estratégica para máxima visibilidade.",
      features: ["Mobiliário Premium", "Localização VIP", "Exposição Exclusiva"]
    },
    { 
      src: standImg2, 
      alt: "Stand Ouro", 
      title: "Stand Ouro",
      description: "Stand de alto padrão com excelente posicionamento e benefícios exclusivos para sua marca.",
      features: ["Posicionamento Estratégico", "Benefícios Exclusivos", "Alta Visibilidade"]
    },
    { 
      src: standImg3, 
      alt: "Stand Prata", 
      title: "Stand Prata",
      description: "Stand de qualidade com boa localização e todos os benefícios necessários para sua exposição.",
      features: ["Qualidade Garantida", "Boa Localização", "Benefícios Completos"]
    },
    { 
      src: standImg4, 
      alt: "Stand Bronze", 
      title: "Stand Bronze",
      description: "Stand econômico com excelente custo-benefício para empresas que querem participar do evento.",
      features: ["Custo-Benefício", "Participação Garantida", "Benefícios Básicos"]
    },
    { 
      src: standImg5, 
      alt: "Stand Especial", 
      title: "Stand Especial",
      description: "Stand personalizado para necessidades específicas da sua empresa no evento.",
      features: ["Personalização", "Flexibilidade", "Soluções Específicas"]
    },
    { 
      src: standImg6, 
      alt: "Totem Digital", 
      title: "Totem Digital",
      description: "Solução digital interativa para exposição de conteúdo e interação com visitantes.",
      features: ["Interatividade", "Conteúdo Digital", "Alta Tecnologia"]
    },
    { 
      src: standImg7, 
      alt: "Área Gastronômica", 
      title: "Área Gastronômica",
      description: "Espaço dedicado para exposição de produtos gastronômicos e culinários regionais.",
      features: ["Foco Gastronômico", "Produtos Regionais", "Experiência Sensorial"]
    },
    { 
      src: standImg8, 
      alt: "Área de Pagamento", 
      title: "Área de Pagamento",
      description: "Espaço estratégico para serviços financeiros e processamento de pagamentos.",
      features: ["Serviços Financeiros", "Localização Central", "Facilidade de Acesso"]
    }
  ];

  const standsPlanta = [
    { 
      src: standPlanta1, 
      alt: "Planta dos Stands - Vista 1", 
      title: "Layout dos Stands",
      description: "Visualize a disposição estratégica dos stands no evento, com diferentes categorias e localizações.",
      features: ["Layout Estratégico", "Categorização", "Fluxo Otimizado"]
    },
    { 
      src: standPlanta2, 
      alt: "Planta dos Stands - Vista 2", 
      title: "Distribuição dos Espaços",
      description: "Confira a distribuição dos espaços e a organização dos diferentes tipos de níveis.",
      features: ["Distribuição Inteligente", "Organização", "Acessibilidade"]
    }
  ];

  return (
    <div className="site-container">
      <Layout>
        <Hero className="flex-item" />
        <section id="event">
          <Feature className="flex-item" />
        </section>


        <section id="benefits">
          <Benefits className="flex-item" />
        </section>

        <section>
          <Content className="flex-item" />
        </section>
        
        <section id="location">
          <Location className="flex-item" />
        </section>

        <section id="palestrantes">
          <Palestrantes className="flex-item" />
        </section>

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

        

        <section id="collaborators">
          <Collaborators className="flex-item" />
        </section>

        <section>
          <Carousel className="flex-item" images={stands} title="NÍVEIS" />
        </section>

        <section>
          <Carousel className="flex-item" images={standsPlanta} title="POSIÇÃO DOS STANDS" />
        </section>

        <section>
          <About className="flex-item" />
        </section>
      </Layout>
    </div>
  );
}
