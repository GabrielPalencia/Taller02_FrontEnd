import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

return (
    <div className="counter">
        <button className='round-button' onClick={decrease}>-</button>
        <span>{count}</span>
        <button className='round-button' onClick={increase}>+</button>   
    </div>
    );
}
export default Counter;