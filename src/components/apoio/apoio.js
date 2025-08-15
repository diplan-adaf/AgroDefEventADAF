import "./apoio.css";

export default function Apoio({ title, images }) {
  return (
    <div className="apoio">
      <h2>{title}</h2>
      <div className="apoio-imgs">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || `Apoio ${index + 1}`}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}
