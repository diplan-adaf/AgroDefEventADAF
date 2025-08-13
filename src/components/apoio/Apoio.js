import idam from "../../assets/logo-idam.png"
import "./apoio.css"

export default function Apoio(){
    return (
        <div className="apoiadores">
            <h2>APOIADORES</h2>

            <div className="apoiadores-imgs">
              <img src={idam} height={150}/>
            </div>
        </div>
    )
}