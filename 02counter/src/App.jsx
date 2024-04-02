import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter((counter = 0));
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <div>
        <button onClick={addValue}>Add +</button>
        <button onClick={removeValue}>Remove -</button>
        <button onClick={resetValue}>Reset #</button>
      </div>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
