import "./patrocinador.css";

export default function Patrocinador({ title, images }) {
  return (
    <div className="patrocinador">
      <h2>{title}</h2>
      <div className="patrocinador-imgs">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || `Patrocinador ${index + 1}`}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}
