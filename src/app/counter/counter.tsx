"use client";
import { useState } from "react";

export const metadata = {
  title: "Product Details",
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
