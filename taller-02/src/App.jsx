import './App.css'

import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Courses from './components/Courses/courses.jsx'
import Students from './components/Students/Students.jsx'
import { Footer } from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Students />
      <Footer />
    </div>
  )
}

