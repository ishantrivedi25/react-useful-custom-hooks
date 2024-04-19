import { useState } from "react"
import useDebounce from "../hooks/useDebounce";

const DebounceComponent = () => {
    const [count, setCount] = useState(1);

    useDebounce(() => {
        console.log(`current count: ${count}`);
    }, 1500, [count]);

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useDebounce</span> hook</h1>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    );
};

export default DebounceComponent;