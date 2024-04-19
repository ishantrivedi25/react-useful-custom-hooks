import './App.css';
import PreviousComponent from "./components/PreviousComponent.jsx";
import FetchComponent from "./components/FetchComponent.jsx";
import ToggleComponent from "./components/ToggleComponent.jsx";

function App() {
  return (
    <div className="App">
      <PreviousComponent />
      <FetchComponent />
      <ToggleComponent />
    </div>
  );
}

export default App;
