const Counter = () => {
  const counter = 0;
  const increment = () => {};
  const decrement = () => {};
  const incrementBy = () => {};
  const decrementBy = () => {};
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <button onClick={() => incrementBy(5)}>+5</button>
      <button onClick={() => decrementBy(5)}>-5</button>
    </div>
  );
};

export default Counter;
