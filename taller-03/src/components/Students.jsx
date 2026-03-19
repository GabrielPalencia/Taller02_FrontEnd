import Counter from '../components/Counter'

export default function Students() {
    return (
        <section className="flex flex-col items-center bg-[#1A1A2E] py-10 px-5 pb-15 text-white" id="nosotros">
            <h2 className="text-[1.1rem] font-bold">
                ¿Cuántos estudiantes van a inscribirse?
            </h2>
            
            <p className="text-[0.6rem] opacity-60 mt-2.5 mb-6.25">
                Usa los botones para ajustar el número
            </p>

            <div className="counter">
                <Counter />
            </div>

            <p className="text-[0.6rem] opacity-60 mt-2.5 mb-6.25">
                estudiantes inscritos
            </p>
        </section>
    )
}