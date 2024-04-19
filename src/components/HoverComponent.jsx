import React from 'react';
import useHover from '../hooks/useHover';

const HoverComponent = () => {
    const [hoverRef, isHovering] = useHover();

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useHover</span> hook</h1>
            <div ref={hoverRef}>
                {isHovering ? 'Hovering' : 'Not hovering'}
            </div>
        </div>
    );
};

export default HoverComponent;