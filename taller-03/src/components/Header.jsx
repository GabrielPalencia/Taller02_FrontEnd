import { Link } from 'react-router';
import Navlinks from '../components/Nav-Links';

export default function Header() {
  return (
    <header className="bg-[#1A1A2E] py-[3.75] text-white sticky top-0">
      <div className="px5 flex justify-between items-center">
        <Link to="/" className="font-bold text-[#E94560] text-xl hover:drop-shadow-[0_0_2em_#646cffaa]">
          ReactAcademy
        </Link>

        <nav>
          <ul className="list-none flex items-center">
            <li><Navlinks title="Inicio" to="/" /></li>
            <li><Navlinks title="Cursos" to="/cursos" /></li>
            <li><Navlinks title="Nosotros" to="/nosotros" /></li>
            <li><Navlinks title="Login" to="/login" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}