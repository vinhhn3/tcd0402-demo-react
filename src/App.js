import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [counter, setCounter] = useState(0);
  const clickMe = () => {
    setCounter(counter + 1);
  };
  const [isDisplay, setDisplay] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isDisplay && <p>Hello World</p>}
        <p>{counter}</p>
        <button onClick={clickMe}>Click me</button>
      </header>
    </div>
  );
}

export default App;
