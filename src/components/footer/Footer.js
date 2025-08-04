import { Mail, Phone } from "lucide-react";
import "./Footer.css"; // Assuming you have a CSS file for styling

export default function Footer(){
    return(
    <footer className="site-footer">
        <h3 className="footer-title">Fale conosco</h3>
        <div className="footer-contact">
          <p>
            <Phone className="icon" /> (92) 8113-6607 | (92) 9330-6826 | (92)
            9160-7182 | (92) 9195-2657
          </p>
          <p>
            <Mail className="icon" /> agrodefesaevento@gmail.com
          </p>
        </div>
    </footer>
    )
}