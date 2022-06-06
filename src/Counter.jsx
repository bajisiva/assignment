import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="card">
      <div className="card1">
        <h1>Counter</h1>
        <button className="inc" onClick={() => setCount(count - 3)}>
          -
        </button>
        {count}
        <button className="inc" onClick={() => setCount(count + 3)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
