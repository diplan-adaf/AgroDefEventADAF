import { Mail, Phone } from "lucide-react";
import "./footer.css"; // Assuming you have a CSS file for styling
import logo from "../../assets/descricaoBanner.png"; // Adjust the path as necessary
import triade from "../../assets/triade.png"; // Adjust the path as necessary
export default function Footer(){
    return(
    <footer className="site-footer">
      <div className="site-logo">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-info">
        <h2>Fale conosco</h2>
        <div className="footer-contact">
          <span>Tel <Phone />: (92) 99999-9999 | (92) 99999-9999 | (92) 99999-9999 </span>
          <span>Email <Mail />: contato@gmail.com.br</span>
        </div>
      </div>
      <div className="footer-triade">
        <img src={triade} alt="Triade" className="footer-triade" />
      </div>
    </footer>
    )
}