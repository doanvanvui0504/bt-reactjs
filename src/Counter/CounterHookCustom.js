import { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return [count, handleIncrease];
}

export default useCounter;
