import Carousel from "../components/carousel/Carousel";
import "./AgroAmazonasSite.css";
import Feature from "../components/feature/Feature";
import Benefits from "../components/benefits/Benefits";
import Location from "../components/location/Location";
import About from "../components/aboutUs/about";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";

export default function AgroAmazonasSite() {
  return (
    <div className="site-container">
      <Layout>
        <Hero className="flex-item" />
        <Feature className="flex-item" />
        <Benefits className="flex-item" />
        <Location className="flex-item" />
        <Carousel className="flex-item" />
        <About className="flex-item" />
      </Layout>
    </div>
  );
}
