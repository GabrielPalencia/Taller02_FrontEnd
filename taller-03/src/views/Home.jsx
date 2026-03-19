import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Students from '../components/Students';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Courses />
      <Students />
    </div>
  );
}