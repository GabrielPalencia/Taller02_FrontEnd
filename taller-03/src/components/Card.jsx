export const Card = ({ icon, alt, title, description, link }) => {
  return (
    <div className="bg-[#FFF] rounded-[10px] w-65 h-65 p-[30px_20px] flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1.25">
      
      <h2 className="text-[2.5em] mb-2.5 pt-0" aria-label={alt}>
        {icon}
      </h2>

      <h3 className="text-[#1A1A2E] text-[1.5em] mb-2.5 font-bold">
        {title}
      </h3>

      <p className="text-[#1A1A2E] opacity-60 text-[0.7em] mb-2.5 grow">
        {description}
      </p>

      <button 
        className="bg-[#E94560] text-[#FFF] py-2.5 px-5 rounded-[20px] cursor-pointer text-[0.6em]"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {link}
      </button>

    </div>
  );
};