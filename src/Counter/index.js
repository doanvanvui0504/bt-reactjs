import useCounter from "./CounterHookCustom";

export function Counter1() {
  const [count1, handleIncrease] = useCounter(0);

  return (
    <div className="counter">
      Count 1: {count1}
      <div>
        <button onClick={handleIncrease}>Add 1</button>
      </div>
    </div>
  );
}

export function Counter2() {
  const [count2, handleIncrease] = useCounter(0);

  return (
    <div className="counter">
      Count 2: {count2}
      <div>
        <button onClick={handleIncrease}>Add 2</button>
      </div>
    </div>
  );
}
