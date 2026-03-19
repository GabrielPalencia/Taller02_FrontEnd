import { Routes, Route } from 'react-router';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './views/Home';
import Cursos from './views/Courses';
import Nosotros from './views/About';
import Login from './views/Login';
import NotFound from './views/Not-Found';

function App() {
  return (
    <div className="min-h-screen min-w-full flex flex-col bg-[#0f101d]">
      <Header />  
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;