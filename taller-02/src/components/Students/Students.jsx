import './Students.css'
import Counter from '../Counter/Counter.jsx'

export default function Students() {
    return (
        <div className="students" id="students">
            <h2>Cuántos estudiantes van a inscribirse</h2>
            <p>Usa los botones para ajustar el número</p>
            <div className="counter">
                <Counter />
            </div>
            <p>estudiantes inscritos</p>
        </div>
    )
}