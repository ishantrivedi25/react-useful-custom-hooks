import React, { useState } from 'react';
import usePrevious from '../hooks/usePrevious';

function PreviousComponent() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div className="wrapper">
            <h1>Component to showcase usePrevious hook</h1>
            <h3>
                Now: {count}, before: {prevCount}
            </h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default PreviousComponent;