import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
