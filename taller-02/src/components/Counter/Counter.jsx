import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

return (
    <div>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>   
    </div>
    );
}
export default Counter;