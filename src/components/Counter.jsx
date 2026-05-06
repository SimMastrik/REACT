const Counter = (props) => {
  const { counter, increment, decrement, incrementBy, decrementBy } = props;
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
