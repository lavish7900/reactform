import React, { useState } from "react";

function App() {
  const [Change, setChange] = useState("");

  const [Click, setClick] = useState("");

  function handleChange(event) {
    setChange(event.target.value);
  }
  function handleClick() {
    setClick(Change);
  }

  return (
    <div className="container">
      <h1>Hello {Click}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={Change}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
