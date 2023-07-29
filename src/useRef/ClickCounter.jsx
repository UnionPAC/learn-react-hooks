import { useRef } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const ClickCounter = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  let ref = useRef(0)

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times! 🤡`)
  }

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <button onClick={handleClick} className="px-6 border-2 py-2 rounded bg-blue-200 border-blue-300 active:scale-95">Click Me!</button>
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

export default ClickCounter;
