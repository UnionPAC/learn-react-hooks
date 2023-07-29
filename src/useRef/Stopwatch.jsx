import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const Stopwatch = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <h1 className="text-2xl font-semibold mb-6">
            Time passed: {secondsPassed.toFixed(3)}
          </h1>
          <button
            onClick={handleStart}
            className="px-6 border-2 py-2 mx-3 rounded bg-green-200 border-green-300 active:scale-95"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="px-6 border-2 py-2 mx-3 rounded bg-red-200 border-red-300 active:scale-95"
          >
            Stop
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

export default Stopwatch;
