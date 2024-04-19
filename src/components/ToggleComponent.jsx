import useToggle from "../hooks/useToggle";
import Alert from "./Alert";

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false);

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useToggle</span> hook</h1>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            {value && <Alert message={`Hello! This is Modal using React portals`} onClose={() => toggleValue(false)} />}
        </div>
    );
};