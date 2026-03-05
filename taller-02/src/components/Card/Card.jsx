import './Card.css'

export const Card = ({icon, alt, title, description, link}) => {

    return (
        <div className="card">
            <h2 className="card-icon" aria-label={alt}>{icon}</h2>
            <h3 className="card-title" >
                {title}
            </h3>
            <p className="card-description">
                {description}
            </p>
            <button className="card-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                {link}
            </button>
        </div>
        )
    }