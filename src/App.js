import './App.css';
import PreviousComponent from "./components/PreviousComponent.jsx";
import FetchComponent from "./components/FetchComponent.jsx";
import ToggleComponent from "./components/ToggleComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import HoverComponent from "./components/HoverComponent.jsx";
import UpdateEffectComponent from "./components/UpdateEffectComponent.jsx";
import DebounceComponent from "./components/DebounceComponent.jsx";
import WindowSizeComponent from "./components/WindowSizeComponent.jsx";
import ClickOutSideComponent from "./components/ClickOutSideComponent.jsx";

function App() {
  return (
    <div className="App">
      <PreviousComponent />
      <FetchComponent />
      <ToggleComponent />
      <FormComponent />
      <HoverComponent />
      <UpdateEffectComponent />
      <DebounceComponent />
      <WindowSizeComponent />
      <ClickOutSideComponent />
    </div>
  );
}

export default App;
