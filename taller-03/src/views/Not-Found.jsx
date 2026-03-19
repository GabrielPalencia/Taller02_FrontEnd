import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-white">
      <h1 className="text-6xl font-bold text-[#E94560]">404</h1>
      <p className="text-xl mt-4 opacity-60">Página no encontrada</p>
      <Link to="/" className="mt-8 bg-[#E94560] px-6 py-2 rounded-full">
        Volver al Inicio
      </Link>
    </div>
  );
}