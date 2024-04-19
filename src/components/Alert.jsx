import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Alert = ({ message, onClose }) => {
    const ref = useRef();

    useOnClickOutside(ref, () => {
        onClose();
    });

    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.popup} ref={ref}>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    },
};

export default Alert;