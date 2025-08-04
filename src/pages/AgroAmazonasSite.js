import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
