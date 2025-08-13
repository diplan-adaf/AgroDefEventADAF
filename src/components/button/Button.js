import "./button.css"
export default function Button({text, ref, children, cls}){
    return (
        <a
            href={ref}
            target="_blank"
            rel="noopener noreferrer"
            className={cls ? `${cls}` : "button-link"}
          >
             {children } {text}
          </a>
    )
}