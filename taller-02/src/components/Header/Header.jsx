import './Header.css'

export default Header => {
  return (
    <header className="header">
        <div className="container header-container">
            <div className="logo">DevStudio</div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}