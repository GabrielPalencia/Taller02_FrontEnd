import './Courses.css'
import { Card } from '../Card/Card'

export default function Courses() {
    return (
        <section className="courses" id="courses">
            <div class="container courses-container">
                <h2>Nuestros Cursos</h2>
                <p>Elige el camino que mejor se adapte a ti</p>
                <div class="courses-cards">
                    <ul>
                        <li> 
                            <Card icon="⚛️" alt="Basic React Card" title="React Básico" description="Componentes, props, estado y eventos. Todo lo que necesitas para empezar." link="Principiante" 
                        /></li>
                        <li> 
                            <Card icon="🔁" alt="React Hooks Card" title="React Hooks" description="Profundiza en useState, useEffect y crea tus propios custom hooks." link="Intermedio" 
                        /></li>
                        <li> 
                            <Card icon="🗂️" alt="Global State Card" title="Estado Global" description="Gestiona el estado con Context API y aprende cuándo usarlo." link="Intermedio" 
                        /></li>
                        <li> 
                            <Card icon="🚀" alt="Advanced React Card" title="React Avanzado" description="Rendimiento, patrones avanzados y arquitectura para proyectos grandes." link="Avanzado" 
                        /></li>
                    </ul>
                </div>
            </div>

        </section>
    )
}