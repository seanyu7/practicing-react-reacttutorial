import "./App.css";
import { useState, useContext} from "react";
import YucodeInfoContext from ".";

function App() {
  const [count, setCount] = useState(0);
  const yucodeInfo = useContext(YucodeInfoContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <p>My name is {yucodeInfo.name}</p>
      <p>Yucode is {yucodeInfo.age} years old.</p>
    </div>
  );
}

export default App;
