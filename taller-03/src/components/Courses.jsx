import { Card } from '../components/Card'

export default function Courses() {
    return (
        <section className="flex justify-center items-center bg-[#F8F9FA]" id="courses">
            <div className="py-12.5 px-5 m-0 text-center">
                <h2 className="text-[1.5rem] pt-12.5 mb-7.5 text-[#1A1A2E] font-bold">
                    Nuestros Cursos
                </h2>
                
                <p className="text-[0.8rem] text-[#1A1A2E] opacity-60 mb-7.5">
                    Elige el camino que mejor se adapte a ti
                </p>

                <div className="courses-cards">
                    <ul className="list-none flex flex-wrap gap-8 p-0 justify-center">
                        <li className="flex"> 
                            <Card icon="⚛️" alt="Basic React Card" title="React Básico" description="Componentes, props, estado y eventos. Todo lo que necesitas para empezar." link="Principiante" />
                        </li>
                        <li className="flex"> 
                            <Card icon="🔁" alt="React Hooks Card" title="React Hooks" description="Profundiza en useState, useEffect y crea tus propios custom hooks." link="Intermedio" />
                        </li>
                        <li className="flex"> 
                            <Card icon="🗂️" alt="Global State Card" title="Estado Global" description="Gestiona el estado con Context API y aprende cuándo usarlo." link="Intermedio" />
                        </li>
                        <li className="flex"> 
                            <Card icon="🚀" alt="Advanced React Card" title="React Avanzado" description="Rendimiento, patrones avanzados y arquitectura para proyectos grandes." link="Avanzado" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}