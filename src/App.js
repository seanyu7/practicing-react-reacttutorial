import "./App.css";
import { useState, useContext, useRef } from "react";
import YucodeInfoContext from ".";

function App() {
  const [count, setCount] = useState(0);
  const yucodeInfo = useContext(YucodeInfoContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRef = () => {};

  return (
    <div className="App">
      <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <p>My name is {yucodeInfo.name}</p>
      <p>Yucode is {yucodeInfo.age} years old.</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
    </div>
  );
}

export default App;
