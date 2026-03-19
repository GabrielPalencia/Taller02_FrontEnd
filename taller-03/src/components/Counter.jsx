import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className="flex items-center gap-7.5 bg-[#16213E] w-fit p-[10px_13px] rounded-[5px]">
            
            <button 
                className="w-10 h-10 rounded-full border-none bg-[#E94560] text-white text-[1.4rem] cursor-pointer p-[0_0_5px_1px] flex items-center justify-center" 
                onClick={decrease}>
                -
            </button>

            <span className="text-[1.8rem] text-[#E94560] font-semibold"> {count} </span>

            <button 
                className="w-10 h-10 rounded-full border-none bg-[#E94560] text-white text-[1.4rem] cursor-pointer p-[0_0_5px_1px] flex items-center justify-center" 
                onClick={increase}>
                +
            </button>   
        </div>
    );
}

