import Carousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import './AgroAmazonasSite.css';

export default function AgroAmazonasSite() {
  return (
    <div className="site-container">
      <Header />

      <section className="carousel-section">
        <Carousel />
      </section>

      <Footer />
    </div>
  );
}
