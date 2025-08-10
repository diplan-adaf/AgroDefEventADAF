import Carousel from "../components/carousel/Carousel";
import "./AgroAmazonasSite.css";
import Location from "../components/location/Location";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Palestrantes from "../components/palestrantes/palestrantes";
import Collaborators from "../components/collaborators/Collaborators";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

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
    { src: standImg1, alt: "Foto 1" },
    { src: standImg2, alt: "Foto 2" },
    { src: standImg3, alt: "Foto 3" },
    { src: standImg4, alt: "Foto 4" },
    { src: standImg5, alt: "Foto 5" },
    { src: standImg6, alt: "Foto 6" },
    { src: standImg7, alt: "Foto 7" },
    { src: standImg8, alt: "Foto 8" }
  ];


  const standsPlanta = [
    { src: standPlanta1, alt: "Foto 1" },
    { src: standPlanta2, alt: "Foto 2" },
  ]

  return (
    <div className="site-container">
      <Layout>
        <Hero className="flex-item" />
        <section id="event">
          <Card title="AGRO AMAZONAS">
            <p>Uma grande celebração da agricultura e da segurança alimentar no nosso estado. Organizado pela ADAF – Agência de Defesa Agropecuária e Florestal do Amazonas, o evento mostra como a produção rural pode crescer com qualidade, saúde e respeito ao meio ambiente.</p>
            <p>Vamos falar sobre como garantir que o alimento que chega à sua mesa seja seguro, valorizando a produção local e abrindo novas oportunidades para quem trabalha no campo.</p>
          </Card>
        </section>


        <section id="benefits">
          <Card title="O QUE OFERECEMOS?" align={"center"}>
            <div className="benefits-card">
              <ul>
                <li>Palestras, workshops e talk shows com mais de 40 especialistas</li>
                <li>Área gastronômica com produtos regionais.</li>
                <li>Espaço para negócios, oportunidades e parcerias.</li>
                <li>Estandes de instituições de pesquisa como EMBRAPA, INPA, UFAM, IFAM e UEA.</li>
                <li>Acesso a informações sobre inspeção sanitária, exportação, uso de agrotóxicos, prevenção de doenças como  febre aftosa e muito mais!</li>
              </ul>
            </div>
          </Card>
        </section>




        <section>
          <Card title="TEMAS ABORDADOS">
            <p>O AGROAMAZONAS & DEFESA AGROPECUÁRIA para promover temas essenciais como segurança alimentar, sanidade animal e vegetal, educação sanitária, controle de agrotóxicos, prevenção de zoonoses e pragas quarentenárias, além da regularização de abatedouros e o uso de novas tecnologias aplicadas ao setor agropecuário. O evento também valoriza experiências de instituições como EMBRAPA, UFAM e IFAM, fortalecendo a integração entre ciência, produção e saúde pública. Além disso, incentiva o financiamento e o empreendedorismo por meio de parceiros como SEBRAE e APEX Brasil. A programação integra múltiplas frentes estratégicas e marca, de forma especial, a celebração dos 13 anos da Agência de Defesa Agropecuária do Amazonas.</p>
          </Card>
        </section>
        
        <section id="location">
          <Location className="flex-item"  />
        </section>

        <section id="palestrantes">
          <Palestrantes className="flex-item" />
        </section>

        <div className="site-buttons">
          <Button text={"Inscreva-se (Simpla)"} ref={"https://www.sympla.com.br/evento/agro-amazonas-defesa-agropecuaria/3060161"}></Button>
          <Button text={"Instagram"} ref={"https://www.instagram.com/agro_defesa_evento/"} cls={"instagram"}>
            <Instagram className="icon" />
          </Button>

        </div>

        

        {/* <section id="collaborators">
          <Collaborators className="flex-item" />
        </section> */}

        <section>
          <Carousel className="flex-item" images={stands} title="STANDS" />
        </section>

        <section>
          <Carousel className="flex-item" images={standsPlanta} title="POSIÇÃO DOS STANDS" />
        </section>

        <Button text={"Garanta seu Stand"} ref={"https://forms.gle/fp6bfcybtcYaoTKo8"} cls={"button-stand"}></Button>

        <section id="about">
          <Card title="SOBRE NÓS">
            <p>A ADAF (Agência de Defesa Agropecuária e Florestal do Estado do Amazonas) é o órgão responsável por proteger a saúde animal, vegetal e a qualidade dos alimentos produzidos no estado. Atua na fiscalização, inspeção e controle sanitário da produção agropecuária, garantindo alimentos seguros, promovendo o desenvolvimento rural sustentável e contribuindo para a saúde pública e a economia do Amazonas.</p>
          </Card>
        </section>
      </Layout>
    </div>
  );
}
