import { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-4 left-4">
        ← Back to Home
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-10">
          <p className="p-4">{count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="p-2 border-2 bg-blue-200 border-blue-400 rounded active:scale-95"
          >
            increment
          </button>
        </div>
        <div>
          <Link
            to="https://github.com/UnionPAC/learn-react-hooks/tree/main/src/useState/Counter.jsx"
            className="text-sm"
          >
            <code>View Source Code</code>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Counter;
