import { useState } from "react";
import "./App.css";
import Toggle from "./Toggle";

function App() {
  const [active, setActive] = useState(false);
  const [countToggle, setCountToggle] = useState(0);

  const handleToggle = () => {
    setActive(!active);
    setCountToggle(countToggle + 1);
  };
  return (
    <div className="app">
      {countToggle}
      <Toggle
        text="FAST"
        active={active}
        handleToggle={handleToggle}
        color="red"
      />
      <Toggle
        text="GOOD"
        active={active}
        handleToggle={handleToggle}
        color="green"
      />
      <Toggle
        text="CHEAP"
        active={active}
        handleToggle={handleToggle}
        color="blue"
      />
    </div>
  );
}

export default App;
