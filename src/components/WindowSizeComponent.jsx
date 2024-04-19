import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const WindowSizeComponent = () => {
    const { width, height } = useWindowSize();

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useWindowSize</span> hook</h1>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
};

export default WindowSizeComponent;