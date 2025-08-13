import uninorte from "../../assets/patrocinadores/UNINORTE VERTICAL - COLORIDO.png"
import "./patrocinadores.css"


export default function Patrocinadores(){
    return (
        <div className="sponsors">
            <h2>PATROCINADORES</h2>

            <div className="sponsors-imgs">
              <img src={uninorte} height={200}/>
            </div>
        </div>
    )
}