import Header from './header/Header';
import Footer from './footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main style={{paddingTop: "60px"}}>{children}</main>
      <Footer />
    </div>
  );
}
