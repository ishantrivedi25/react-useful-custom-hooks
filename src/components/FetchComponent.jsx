import { useState } from "react";
import useFetch from "../hooks/useFetch";

const FetchComponent = () => {
    const [id, setId] = useState(1);
    const { data, error, loading } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        [id]
    );

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useFetch</span> hook</h1>
            <div>CurrentID: {id}</div>
            <button onClick={() => setId(currentId => currentId + 1)}>
                Increment ID
            </button>
            <div>Loading: {loading.toString()}</div>
            <div>Error: {JSON.stringify(error, null, 2)}</div>
            <div>Data: {JSON.stringify(data, null, 2)}</div>
        </div>
    );
};

export default FetchComponent;