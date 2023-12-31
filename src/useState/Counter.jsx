import { useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const Counter = () => {
  const [count, setCount] = useState(0);

  const { currentDirectory, currentFileName } = useCurrentFilePath();

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
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
            to={`https://github.com/UnionPAC/learn-react-hooks/tree/main/src/${currentDirectory}/${currentFileName}.jsx`}
            target="_blank"
            className="text-sm px-6 py-3 rounded border-2 text-slate-700"
          >
            <code>View Code</code>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Counter;
