import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const Increase = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("Maximum number is exceed");
    }
  };
  const Decrease = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Count : {count}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
    </>
  );
}

export default App;
