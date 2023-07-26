import { useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const TextField = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <h4 className="mb-8">Type something!</h4>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="px-2 border-b-2 focus:outline-none"
          />
          <p className="my-6 text-sm">Output: {text}</p>
          <button
            onClick={() => setText("")}
            className="py-1 px-6 border-2 bg-red-200 border-red-300 rounded active:scale-95"
          >
            Reset
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

export default TextField;
