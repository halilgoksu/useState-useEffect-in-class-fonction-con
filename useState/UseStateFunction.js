import React, { useState } from "react";

const UseStateFunction = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Function Component</h2>
      <p>Counter : {counter}</p>
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
};
export default UseStateFunction;
