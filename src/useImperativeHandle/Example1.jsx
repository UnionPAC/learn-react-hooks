import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import CustomInput from "./CustomInput";

const Example1 = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [value, setValue] = useState("red");
  const inputRef = useRef(null);

  function handleBtnClick() {
    inputRef.current.alertHi(); // calls alertHi (custom ref from using useImperativeHandle)
  }

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <CustomInput
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <button
            className="px-6 py-2 rounded border-2 border-blue-300 bg-blue-200"
            onClick={handleBtnClick}
          >
            Focus
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

export default Example1;
