import React from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { increment, decrement, incrementByAmount } from "./store/counterSlice";

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
