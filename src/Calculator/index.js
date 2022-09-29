import { useState } from "react";

import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState(null);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleClick = (e) => {
    switch (e.target.innerHTML) {
      case "x":
        setResult(inputValue1 * inputValue2);
        break;
      case "/":
        setResult(inputValue1 / inputValue2);
        break;
      case "+":
        setResult(+inputValue1 + +inputValue2);
        break;
      case "-":
        setResult(inputValue1 - inputValue2);
        break;
      default:
        throw new Error();
    }
  };

  return (
    <div className="wrapper">
      <input
        type="number"
        value={inputValue1}
        onChange={(e) => {
          setInputValue1(e.target.value);
        }}
      />
      <input
        type="number"
        value={inputValue2}
        onChange={(e) => {
          setInputValue2(e.target.value);
        }}
      />
      <h3>Result: {result}</h3>
      <div>
        <button onClick={(e) => handleClick(e)}>x</button>
        <button onClick={(e) => handleClick(e)}>/</button>
        <button onClick={(e) => handleClick(e)}>+</button>
        <button onClick={(e) => handleClick(e)}>-</button>
      </div>
    </div>
  );
}

export default Calculator;
