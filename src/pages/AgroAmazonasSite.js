import Carousel from "../components/carousel/Carousel";
import "./AgroAmazonasSite.css";
import Location from "../components/location/Location";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Palestrantes from "../components/palestrantes/palestrantes";
import Collaborators from "../components/collaborators/Collaborators";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { organizacao, patrocinadores, apoio, realizacao } from "../data/Logo";
import { stands, standsPlanta } from "../data/Stand";
import { Instagram, Chrome } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Brands from "../components/brands/Brands";

export default function AgroAmazonasSite() {
  const location = useLocation();
  const [activeDay, setActiveDay] = useState("02-09");

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

  return (
    <div className="site-container">
      <Layout>
        <Hero className="flex-item" />
        <section id="medias">
          <Card
            title={"FIQUE POR DENTRO ATRAVÉS DAS NOSSAS REDES SOCIAIS"}
            align={"center"}
          >
            <div className="media-buttons">
              <Button cls={"adaf"} ref={"https://www.adaf.am.gov.br/"}>
                <Chrome className="icon" /> Site da ADAF
              </Button>
              <Button
                cls={"instagram"}
                ref={"https://www.instagram.com/adafamazonas/?hl=en"}
              >
                <Instagram className="icon" /> Perfil da ADAF
              </Button>
              <Button
                cls={"instagram"}
                ref={
                  "https://www.instagram.com/reel/DNYLFvAx2B2/?igsh=MWpmbDB5Znkyb2Ywag=="
                }
              >
                <Instagram className="icon" /> Perfil do Evento
              </Button>
            </div>
          </Card>
        </section>

        <section id="event">
          <Card title="AGRO AMAZONAS">
            <p>
              Uma grande celebração da agricultura e da segurança alimentar no
              nosso estado. Organizado pela{" "}
              <strong>
                ADAF – Agência de Defesa Agropecuária e Florestal do Amazonas
              </strong>
              , o evento mostra como a produção rural pode crescer com
              qualidade, saúde e respeito ao meio ambiente.
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
          <Card title="O QUE OFERECEMOS?" align={"center"}>
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
        </section>

        <section>
          <Card title="TEMAS ABORDADOS">
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
        <section id="programacaoEvento">
          <Card title={"Programação"}>
            <p>
              O evento acontecerá nos dias <strong>02 e 03 de setembro</strong>,
              com <strong>início às 9h00</strong> para o credenciamento dos
              participantes e<strong> finalizará às 21:00</strong>. As palestras
              terão <strong>início às 10h00</strong>, acontecendo
              simultaneamente em quatro salas distintas, e às 10h30 será
              realizada a <strong>abertura oficial do evento</strong>. A
              programação das palestras seguirá até às 19h30, com intervalos de
              30 minutos entre as apresentações para garantir melhor organização
              e conforto ao público presente.
            </p>
          </Card>
        </section>

        <section id="cronograma">
          <Card title={"Cronograma"}>
            <div className="tabs-container">
              <div className="tabs">
                <button
                  className={`tab ${activeDay === "02-09" ? "active" : ""}`}
                  onClick={() => setActiveDay("02-09")}
                >
                  02/09 - Primeiro Dia
                </button>
                <button
                  className={`tab ${activeDay === "03-09" ? "active" : ""}`}
                  onClick={() => setActiveDay("03-09")}
                >
                  03/09 - Segundo Dia
                </button>
              </div>

              <div className="cronograma-content">
                {activeDay === "02-09" && (
                  <div className="cronograma-day">
                    <h3>Dia 02 de setembro (Terça-feira)</h3>
                    <br />
                    <p>
                      <strong>08h00 –</strong> <br />
                      Abertura dos Portões | Início do Evento <br />
                      <br />
                      <strong>08h00 – 09h00</strong> <br />
                      Credenciamento dos Participantes <br />
                      <br />
                      <strong>09h00 – 10h00</strong> <br />
                      Recepção, visitação e ambientação <br />
                      <br />
                      <strong>10h00 – 10h30</strong> <br />
                      Início das Palestras nas Salas Temáticas <br />
                      <br />
                      <strong>10h30 – 11h30</strong> <br />
                      Cerimonial de Abertura Oficial <br />
                      <br />
                      <strong>11h30 – 12h30</strong> <br />
                      Continuidade das Palestras em Salas Temáticas <br />
                      <br />
                      <strong>13h00 – 14h00</strong> <br />
                      Roda de conversa <br />
                      <br />
                      <strong>14h00 – 19h00</strong> <br />
                      Palestras simultâneas nas quatro salas <br />
                      <br />
                      <strong>18h00 – 19h00</strong> <br />
                      Roda de Conversa dos chefes <br />
                      <br />
                      <strong>19h00 – 21h00</strong> <br />
                      Palestras em Salas Temáticas <br />
                      <br />
                      <strong>18h00 – 21h00</strong> <br />
                      Encerramento da Programação do Dia <br />
                      <br />
                      <strong>19h00 –</strong> <br />
                      Atração cultural: Paulo André Chaves – Toada dos Bois Garantido e
                      Caprichoso
                    </p>
                  </div>
                )}

                {activeDay === "03-09" && (
                  <div className="cronograma-day">
                    <h3>Dia 03 de setembro (Quarta-feira)</h3>
                    <br />
                    <p>
                      <strong>08h00 –</strong> <br />
                      Abertura dos Portões | Início do Evento <br />
                      <br />
                      <strong>08h00 – 09h00</strong> <br />
                      Credenciamento dos Participantes <br />
                      <br />
                      <strong>09h00 – 10h00</strong> <br />
                      Recepção, visitação e ambientação <br />
                      <br />
                      <strong>10h00 – 10h30</strong> <br />
                      Início das Palestras nas Salas Temáticas <br />
                      <br />
                      <strong>10h30 – 11h30</strong> <br />
                      Cerimonial de Abertura do Dia 2 <br />
                      <br />
                      <strong>11h30 – 12h30</strong> <br />
                      Continuidade das Palestras em Salas Temáticas <br />
                      <br />
                      <strong>13h00 – 14h00</strong> <br />
                      Painel Temático <br />
                      <br />
                      <strong>14h00 – 18h00</strong> <br />
                      Palestras simultâneas nas quatro salas <br />
                      <br />
                      <strong>18h00 – 19h00</strong> <br />
                      Roda de Conversa <br />
                      <br />
                      <strong>19h00 – 21h00</strong> <br />
                      Palestras em Salas Temáticas <br />
                      <br />
                      <strong>18h00 – 21h00</strong> <br />
                      Encerramento Oficial do AgroAmazonas 2025 <br />
                      <br />
                      <strong>19h00 –</strong> <br />
                      Atração cultural: Sertanejo Raiz
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </section>

        <section id="location">
          <Location className="flex-item" />
        </section>

        <section id="palestrantes">
          <Palestrantes className="flex-item" />
        </section>

        {/* <div className="site-buttons">
          <Button
            text={"Inscreva-se (Simpla)"}
            ref={
              "https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161"
            }
            cls={"simpla"}
          ></Button>
          <Button
            text={"Instagram"}
            ref={
              "https://www.instagram.com/agro_defesa_evento/?igsh=MXRoeTRkaDJuNHRtZw%3D%3D"
            }
            cls={"instagram"}
          >
            <Instagram className="icon" />
          </Button>
        </div> */}

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

        <Brands title={"PATROCINADORES"} images={patrocinadores} />
        <Brands title={"APOIO"} images={apoio} />
        <Brands title={"ORGANIZAÇÃO"} images={organizacao} />
      </Layout>
    </div>
  );
}
