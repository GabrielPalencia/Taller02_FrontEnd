import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // La lógica para deshabilitar el botón si los campos están vacíos
  const isButtonDisabled = email.trim() === '' || password.trim() === '' || isSubmitting;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Como no hay backend, solo simulamos el envío dejando los campos bloqueados.
  };

  return (
    <div className="flex flex-col bg-[linear-gradient(135deg,#0f101d_0%,#102d53_100%)] items-center justify-center py-20">
      <div className="bg-white  text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Ingresar a ReactAcademy</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:bg-gray-200"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1" htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:bg-gray-200"
              placeholder="******"
            />
          </div>

          <button 
            type="submit" 
            disabled={isButtonDisabled}
            className={`mt-4 py-2 px-4 rounded-md font-bold text-white transition-colors ${
              isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f43f5e] hover:bg-rose-600'
            }`}
          >
            {isSubmitting ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}