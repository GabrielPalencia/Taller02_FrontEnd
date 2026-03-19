import { Link } from 'react-router';

export default function Hero() {
  return (
    <section 
      className="bg-[linear-gradient(135deg,#0f101d_0%,#102d53_100%)] text-white py-25 text-center" 
      id="inicio"
    >
      <div className="container mx-auto">
        <h1 className="text-[2.2rem] mb-5">
          Aprende <span className="text-[#E94560] font-bold">React</span> desde cero
        </h1>

        <p className="text-[0.85rem] mb-7.5 px-[27%] pb-1.25 opacity-60">
          Domina la librería más popular del frontend con proyectos prácticos y reales
        </p>

        <Link 
          to="/cursos" 
          className="bg-[#E94560] text-white py-2.5 px-7 rounded-[30px] font-[640] inline-block cursor-pointer"
        >
          Ver Cursos
        </Link>
      </div>
    </section>
  );
}