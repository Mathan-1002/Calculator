import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculate = () => {
    try {
      const sanitizedInput = input.replace(/[^0-9+\-*/.]/g, "");
      const evaluatedResult = new Function(`return ${sanitizedInput}`)();
      setResult(evaluatedResult);
    } catch (error) {
      alert("Invalid expression");
    }
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter expression"
        style={{ width: "200px", padding: "5px" }}
      />
      <div style={{ margin: "10px" }}>
        <button onClick={calculate} style={{ marginRight: "10px" }}>
          Calculate
        </button>
        <button onClick={clear}>Clear</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;