import "./App.css";
import { useState, useContext, useRef, useReducer } from "react";
import YucodeInfoContext from ".";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const yucodeInfo = useContext(YucodeInfoContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRef = () => {};

  const [state, dispatch] = useReducer(reducer, 0);

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

      <hr />
      <h1>useReducer</h1>
      <p>count : {state}</p>
      <button onClick = {()=> dispatch({type: "increase"})}>+</button>
      <button onClick = {()=> dispatch({type: "decrease"})}>-</button>
    </div>
  );
}

export default App;
