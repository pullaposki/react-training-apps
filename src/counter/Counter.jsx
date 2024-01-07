import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increment = function(){
        setCount(count + 1);
    }

    const decrease = function(){
        setCount(count - 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;