import React, { useEffect, useState } from "react";

const UseEffectFunction = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log("useEffect");
  },[counter]);
  

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
export default UseEffectFunction;


