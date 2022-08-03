import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const yucodeInfo = { name: "yucode", age: 25 };

const YucodeInfoContext = createContext(yucodeInfo);

root.render(
  <YucodeInfoContext.Provider value={yucodeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </YucodeInfoContext.Provider>
);

export default YucodeInfoContext
