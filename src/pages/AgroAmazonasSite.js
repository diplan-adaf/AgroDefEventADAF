import Carousel from "../components/carousel/Carousel";
import './AgroAmazonasSite.css';
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
        <Hero />
        <Feature />
        <Benefits />
        <Location />
        <Carousel />
        <About />
      </Layout>
    </div>
  );
}
