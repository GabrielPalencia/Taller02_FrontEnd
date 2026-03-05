import './Header.css'
import NavLink from '../Nav-Links/Nav-link'

export default function Header() {
  return (
    <header className="header">
        <div className="container header-container">
            <div className="logo">DevStudio</div>
            <nav className="nav-links">
                <ul>
                    <li><NavLink title="Inicio" href="" /></li>
                    <li><NavLink title="Cursos" href="#courses" /></li>
                    <li><NavLink title="Nosotros" href="#students" /></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}