import './Card.css'

export const Card = ({icon, alt, title, description, link}) => {

    return (
        <div className="card">
            <img src={icon} alt={alt} className="card-icon" />
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