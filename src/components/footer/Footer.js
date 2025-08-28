import "./footer.css";
import logo from "../../assets/logoAgroDefesa.svg"; 
import regua from "../../assets/imgs/realizacao/ReguaBrancaRealizacao.svg"
export default function Footer(){
    return(
    <footer className="site-footer">
      <div className="site-logo">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-info">
        <h3 id="fale-conosco">Fale conosco</h3>
        <div className="footer-contact">
          <span>Tel: (92) 9160-7182 |(92) 8113-6607 | (92) 9330-6826 | (92) 9195-2657</span>
          <span>Email: agrodefesaevento@gmail.com.br</span>
        </div>
      </div>
      <div className="footer-triade">
        <img src={regua} alt="Triade" className="footer-triade" />
      </div>
    </footer>
    )
}