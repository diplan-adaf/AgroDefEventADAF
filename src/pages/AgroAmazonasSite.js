import Carousel from "../components/carousel/Carousel";
import "./AgroAmazonasSite.css";
import Location from "../components/location/Location";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Palestrantes from "../components/palestrantes/palestrantes";
import Collaborators from "../components/collaborators/Collaborators";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { Instagram, Chrome } from "lucide-react";
import { Link } from "react-router-dom";


import uninorte from "../assets/patrocinadores/UNINORTE VERTICAL - COLORIDO(1).png";
import maraFrios from "../assets/patrocinadores/maraFrios.jpeg";
import hossokawa from "../assets/patrocinadores/hossokawa.jpeg";
import jungleHotel from "../assets/patrocinadores/jungleHotel.png";

import hgservice from "../assets/organização/HGservice.png";

import adaf from "../assets/adaf.png";
import idam from "../assets/logo-idam.png";


import standDiamante from "../assets/saida-2.svg";
import standOuro from "../assets/saida-3.svg";
import standPrata from "../assets/saida-4.svg";
import standBronze from "../assets/saida-5.svg";
import totem from "../assets/saida-6.svg";
import gastronomia from "../assets/saida-7.svg";
import pagamento from "../assets/saida-8.svg";
import standPlanta1 from "../assets/planta-1.svg";
import standPlanta2 from "../assets/planta-2.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Brands from "../components/brands/Brands";

export default function AgroAmazonasSite() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; 
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.hash && location.hash !== "#" && location.hash !== "#/") {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else if (location.hash === "#" || location.hash === "#/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const stands = [
    {
      src: standDiamante,
      alt: "Stand Diamante",
      title: "Stand Diamante",
      description:
        "O stand mais exclusivo do evento, com mobiliário premium e localização estratégica para máxima visibilidade.",
      features: [
        "Mobiliário Premium",
        "Localização VIP",
        "Exposição Exclusiva",
      ],
    },
    {
      src: standOuro,
      alt: "Stand Ouro",
      title: "Stand Ouro",
      description:
        "Stand de alto padrão com excelente posicionamento e benefícios exclusivos para sua marca.",
      features: [
        "Posicionamento Estratégico",
        "Benefícios Exclusivos",
        "Alta Visibilidade",
      ],
    },
    {
      src: standPrata,
      alt: "Stand Prata",
      title: "Stand Prata",
      description:
        "Stand de qualidade com boa localização e todos os benefícios necessários para sua exposição.",
      features: [
        "Qualidade Garantida",
        "Boa Localização",
        "Benefícios Completos",
      ],
    },
    {
      src: standBronze,
      alt: "Stand Bronze",
      title: "Stand Bronze",
      description:
        "Stand econômico com excelente custo-benefício para empresas que querem participar do evento.",
      features: [
        "Custo-Benefício",
        "Participação Garantida",
        "Benefícios Básicos",
      ],
    },
    {
      src: totem,
      alt: "Totem Digital",
      title: "Totem Digital",
      description:
        "Solução digital interativa para exposição de conteúdo e interação com visitantes.",
      features: ["Interatividade", "Conteúdo Digital", "Alta Tecnologia"],
    },
    {
      src: gastronomia,
      alt: "Área Gastronômica",
      title: "Área Gastronômica",
      description:
        "Espaço dedicado para exposição de produtos gastronômicos e culinários regionais.",
      features: [
        "Foco Gastronômico",
        "Produtos Regionais",
        "Experiência Sensorial",
      ],
    },
    {
      src: pagamento,
      alt: "Área de Pagamento",
      title: "Área de Pagamento",
      description:
        "Espaço estratégico para serviços financeiros e processamento de pagamentos.",
      features: [
        "Serviços Financeiros",
        "Localização Central",
        "Facilidade de Acesso",
      ],
    },
  ];

  const standsPlanta = [
    {
      src: standPlanta1,
      alt: "Planta dos Stands - Vista 1",
      title: "Layout dos Stands",
      description:
        "Visualize a disposição estratégica dos stands no evento, com diferentes categorias e localizações.",
      features: ["Layout Estratégico", "Categorização", "Fluxo Otimizado"],
    },
    {
      src: standPlanta2,
      alt: "Planta dos Stands - Vista 2",
      title: "Distribuição dos Espaços",
      description:
        "Confira a distribuição dos espaços e a organização dos diferentes tipos de níveis.",
      features: ["Distribuição Inteligente", "Organização", "Acessibilidade"],
    },
  ];
  

  const brands = [
    {
      title: "PATROCINADORES",
      imgs: [
        {
          name: "Uninorte",
          src: uninorte,
        },
        {
          name: "Marafrios",
          src: maraFrios
        },
        {
          name: "Hossokawa",
          src: hossokawa
        },
        {
          name: "Amazonia Jungle Hotel",
          src: jungleHotel
        }
      ]
    },
    {
      title: "ORGANIZAÇÃO",
      imgs: [
        {
          name: "hg service",
          src: hgservice,
        },
      ]
    }
  ]

  return (
    <div className="site-container">
      <Layout>
        <Hero className="flex-item" />
        <section id="medias">
          <Card title={"FIQUE POR DENTRO ATRAVÉS DAS NOSSAS REDES SOCIAIS"} align={"center"}>
            <div className="media-buttons">
                <Button cls={"adaf"}><Chrome className="icon"/> Site ADAF</Button>
                <Button cls={"instagram"}><Instagram className="icon"/> Perfil da ADAF</Button>
                <Button cls={"instagram"}><Instagram className="icon"/> Perfil do Evento</Button>
            </div>
          </Card>
        </section>

        <section id="event">
          <Card title="AGRO AMAZONAS">
            <p>
              Uma grande celebração da agricultura e da segurança alimentar no
              nosso estado. Organizado pela <strong>ADAF – Agência de Defesa
              Agropecuária e Florestal do Amazonas</strong>, o evento mostra como a
              produção rural pode crescer com qualidade, saúde e respeito ao
              meio ambiente.
            </p>
            <br />
            <p>
              Vamos falar sobre como garantir que o alimento que chega à sua
              mesa seja seguro, valorizando a produção local e abrindo novas
              oportunidades para quem trabalha no campo.
            </p>
          </Card>
        </section>

        <section id="benefits">
          <Card title="O QUE OFERECEMOS?" align={"center"} className={"container-benefits"}>
            <div className="benefits-card">
              <ul>
                <li>
                  Palestras, workshops e talk shows com mais de 40 especialistas
                </li>
                <li>Área gastronômica com produtos regionais.</li>
                <li>Espaço para negócios, oportunidades e parcerias.</li>
                <li>
                  Estandes de instituições de pesquisa como EMBRAPA, INPA, UFAM,
                  IFAM e UEA.
                </li>
                <li>
                  Acesso a informações sobre inspeção sanitária, exportação, uso
                  de agrotóxicos, prevenção de doenças como febre aftosa e muito
                  mais!
                </li>
              </ul>
            </div>
          </Card>

          <Card title="TEMAS ABORDADOS" className={"container-benefits"}>
            <p>
              O AGROAMAZONAS & DEFESA AGROPECUÁRIA para promover temas
              essenciais como segurança alimentar, sanidade animal e vegetal,
              educação sanitária, controle de agrotóxicos, prevenção de zoonoses
              e pragas quarentenárias, além da regularização de abatedouros e o
              uso de novas tecnologias aplicadas ao setor agropecuário.
            </p>
            <p>
              O evento também valoriza experiências de instituições como
              EMBRAPA, UFAM e IFAM, fortalecendo a integração entre ciência,
              produção e saúde pública. Além disso, incentiva o financiamento e
              o empreendedorismo por meio de parceiros como SEBRAE e APEX
              Brasil. A programação integra múltiplas frentes estratégicas e
              marca, de forma especial, a celebração dos 13 anos da Agência de
              Defesa Agropecuária do Amazonas.
            </p>
          </Card>
        </section>

        <section id="location">
          <Location className="flex-item" />
        </section>

        <section id="palestrantes">
          <Palestrantes className="flex-item" />
        </section>


        <section>
          <Card title={"VENHA PRESTIGIAR O NOSSO EVENTO"} align={"center"}>
            <Button
            text={"Inscreva-se (Simpla)"}
            ref={
              "https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161"
            }
            cls={"simpla"}
            ></Button>
          </Card>
        </section>

        <section id="brands">
          <Brands brands={brands}/>
        </section>

        <section id="collaborators">
          <Collaborators className="flex-item" />
        </section>


        <section>
          <Carousel className="flex-item" images={stands} title="STANDS" />
        </section>

        <section>
          <Carousel
            className="flex-item"
            images={standsPlanta}
            title="POSIÇÃO DOS STANDS"
          />
        </section>

        <section id="about">
          <Card title={"SOBRE NÓS"}>
            <p>
              {" "}
              <strong>
                A ADAF - Agência de Defesa Agropecuária e Florestal do Estado do
                Amazonas
              </strong>{" "}
              é o órgão responsável por proteger a saúde animal, vegetal e a
              qualidade dos alimentos produzidos no estado. Atua na
              fiscalização, inspeção e controle sanitário da produção
              agropecuária, garantindo alimentos seguros, promovendo o
              desenvolvimento rural sustentável e contribuindo para a saúde
              pública e a economia do Amazonas.
            </p>
          </Card>
        </section>
      </Layout>
    </div>
  );
}
