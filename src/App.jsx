import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ background: "red" }}>Hi from div 1</div>
      <div style={{ background: "yellow" }}>Hi from div 2</div>
      <div style={{ background: "green" }}>Hi from div 3</div>
    </div>
  );
}

export default App;
