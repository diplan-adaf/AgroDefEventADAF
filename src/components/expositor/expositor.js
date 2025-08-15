import "./expositor.css";

export default function Expositor({ title, images }) {
  return (
    <div className="expositor">
      <h2>{title}</h2>
      <div className="expositor-imgs">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || `Expositor ${index + 1}`}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}
