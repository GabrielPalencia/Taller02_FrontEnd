import { NavLink } from 'react-router';

export default function Navlinks({ title, to }) {
  return (
    <NavLink 
      to={to} 
      className="p-2 text-white opacity-60 text-[0.6rem] hover:opacity-100 hover:drop-shadow-[0_0_2em_#646cffaa]">
      {title}
    </NavLink>
  );
}