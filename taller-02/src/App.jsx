import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Courses from './components/Courses/courses'
import Students from './components/Students/students'
import Footer from './components/Footer/footer'


function App() {

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

export default App
