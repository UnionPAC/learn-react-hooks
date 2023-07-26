import { useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const Form = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [name, setName] = useState("John");
  const [age, setAge] = useState(18);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <h4 className="mb-8">What's your name?</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 border-b-2 focus:outline-none block mb-6"
          />
          <button
            onClick={() => setAge(age + 1)}
            className="mb-6 py-1 px-6 border-2 bg-green-200 border-green-300 rounded active:scale-95"
          >
            Increment Age
          </button>
          <p className="text-sm">
            Output: Hello, {name}. You are {age}
          </p>
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

export default Form;
