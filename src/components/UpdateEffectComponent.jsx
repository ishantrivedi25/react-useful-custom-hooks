import { useState } from "react"
import useUpdateEffect from "../hooks/useUpdateEffect"

const UpdateEffectComponent = () => {
    const [count, setCount] = useState(0);
    useUpdateEffect(() => {
        console.log("Alert: ", count);
    }, [count]);

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useUpdateEffect</span> hook</h1>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
};

export default UpdateEffectComponent;