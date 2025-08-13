import "./card.css" 
export default function Card({title, children, className, align}) {
    return (
        <div className={className ? `${className}` : "container"} style={align ? { alignItems: align } : {alignItems: "start"}}>
            <h2>{title}</h2>
            <div className="content" style={align ? { alignItems: align } : {alignItems: "start"}}>
                {children}
            </div>
        </div>
    );
}