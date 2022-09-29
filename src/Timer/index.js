import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setCount(count - 1);
  //   }, 1000);
  //   if (count === 0) {
  //     clearTimeout(timerId);
  //     alert("Time's up");
  //   }
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [count]);

  useEffect(() => {
    const timerId = setInterval(
      () =>
        setCount((prev) => {
          if (prev - 1 === 0) {
            clearInterval(timerId);
          }
          return prev - 1;
        }),
      1000
    );

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      alert("Time's up");
    }
  }, [count]);

  return (
    <div className="App">
      <div>Count down from {count}</div>
    </div>
  );
}
