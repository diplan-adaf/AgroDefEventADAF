import "./brand.css"
import Button from "../button/Button"

export default function Brands({brands}){
    return (
        <div className="brand-container">
            <div className="collaborators-hero">
                <div className="hero-content">
                  <h2>Instituições participantes</h2>
                </div>
            </div>

            {brands.map((brand, brandIndex) => (
                <div key={brandIndex} className="brands">
                    <h2>{brand.title}</h2>
                    <div className="brands-imgs">
                        {brand.imgs.map((image, imageIndex) => (
                            <img 
                                key={imageIndex}
                                src={image.src} 
                                alt={image.name || `Logo ${brand.title} ${imageIndex + 1}`}
                                title={image.name}
                            />
                        ))}
                    </div>
                </div>    
            ))}

            <Button>Quero participar</Button>
        </div>
    )
}