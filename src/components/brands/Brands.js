import "./brand.css"

export default function Brands({title, images}){
    return (
    <div className="brands">
        <h2>{title}</h2>
        <div className="brands-imgs">
            {
                images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image.src} 
                        alt={image.alt || `Brand ${index + 1}`}
                        height={150}
                    />
                ))
            }
        </div>
    </div>
    )
}