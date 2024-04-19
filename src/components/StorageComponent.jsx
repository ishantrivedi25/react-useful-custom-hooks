import { useSessionStorage, useLocalStorage } from "../hooks/useStorage";

const StorageComponent = () => {
    const [name, setName, removeName] = useSessionStorage("name", "Jonathan");
    const [salary, setSalary, removeSalary] = useLocalStorage("salary", 20000);

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useStorage</span> hook</h1>
            <div>
                {name} - {salary && `$${salary}`}
            </div>
            <button onClick={() => setName("Alex")}>Set Name</button>
            <button onClick={() => setSalary(40000)}>Set Salary</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeSalary}>Remove Salary</button>
        </div>
    );
};

export default StorageComponent;