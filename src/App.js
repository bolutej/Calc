import React from "react";
import { useState } from "react";

function App() {
  const [all, setAll] = useState("");

  const eachops = ["/", "*", "+", "-", "."];

  const handleUpdate = (value) => {
    if (
      (eachops.includes(value) && all === "") ||
      (eachops.includes(value) && eachops.includes(all.slice(-1)))
    ) {
      return;
    }
    setAll(all + value);
  };

  const createDigits = () => {
    const digits = [];

    [...Array(10)].forEach((_, i) => {
      digits.push(
        <button onClick={() => handleUpdate(i.toString())} key={i}>
          {i}
        </button>
      );
    });
    return digits;
  };

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setAll(eval(all).toString());
  };

  const handleDelete = () => {
    if (all === "") {
      return;
    }
    const value = all.slice(0, -1);

    setAll(value);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{all || "0"}</div>

        <div className="operators">
          <button onClick={() => handleUpdate("/")}>/</button>
          <button onClick={() => handleUpdate("*")}>*</button>
          <button onClick={() => handleUpdate("+")}>+</button>
          <button onClick={() => handleUpdate("-")}>-</button>

          <button onClick={handleDelete}>Clear</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => handleUpdate("0")}>0</button>
          <button onClick={() => handleUpdate(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
