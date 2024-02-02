"use client";

import { useState, useEffect } from "react";

function Increment({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>INCREMENT</button>;
}

function Counter({ count }) {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default function Page() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <Counter count={count} />
      <Increment count={count} setCount={setCount} />
    </div>
  );
}
