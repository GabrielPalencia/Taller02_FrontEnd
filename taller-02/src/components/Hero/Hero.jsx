import './Hero.css'

export default function Hero() {
    return (
        <section className= "hero" id= "inicio">
            <div className="hero-text">
                <h1>Aprende <span className="hero-highlight">React</span> desde cero</h1>
                <p>Domina la librería más popular del frontend con proyectos prácticos y reales</p>
                <a href="#courses" className="hero-red-button">Ver Cursos</a>
            </div>
        </section>
    )
}