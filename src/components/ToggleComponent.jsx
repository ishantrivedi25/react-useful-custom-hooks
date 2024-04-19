import useToggle from "../hooks/useToggle";

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false);

    return (
        <div className="wrapper">
            <h1>Component to showcase useFetch hook</h1>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Set Value to True</button>
            <button onClick={() => toggleValue(false)}>Set Value to False</button>
        </div>
    );
};