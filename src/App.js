import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import New from "./New";
import Guage from "./Guage";

function App() {
  // const [count, setCount] = useState(10);

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [showComponent, toggleShow] = useState(true);

  return (
    <div>
      <div className="App">
        <button
          onClick={() => {
            if (count1 != 3) {
              setCount1(count1 + 1);
            }
            setCount2(count2 + 2);
          }}
        >
          Click Me
        </button>
        <h1>count1: {count1}</h1>
        <h1>count2: {count2}</h1>

        <Form />
        <button
          onClick={() => {
            toggleShow(showComponent ? false : true);
          }}
        >
          Click for toggle
        </button>
        {showComponent ? <New /> : null}

        <Guage percent={count1 * 0.1} />
      </div>
    </div>
  );
}

export default App;
