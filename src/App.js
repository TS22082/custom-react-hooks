import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import New from "./New";

function App() {
  // const [count, setCount] = useState(10);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [showComponent, toggleShow] = useState(true);

  return (
    <div>
      <div className="App">
        <button
          onClick={() => {
            setCount1(count1 + 1);
            setCount2(count2 + 2);
          }}
        >
          Click Me
        </button>
        <h1>count1: {count1}</h1>
        <h1>count2: {count2}</h1>
      </div>
      <Form />

      <button
        onClick={() => {
          toggleShow(showComponent ? false : true);
        }}
      >
        Click for toggle
      </button>
      {showComponent ? <New /> : null}
    </div>
  );
}

export default App;
