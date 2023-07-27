import { useReducer } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment_age":
      return {
        name: state.name,
        age: state.age + 1,
      };
    case "changed_name":
      return {
        name: action.newName,
        age: state.age,
      };
  }
  throw Error(`Unknown action: ${action.type}`);
};

const initialState = { name: "geoff", age: 12 };

export const Form = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "changed_name", newName: e.target.value });
  };

  const handleButtonClick = (e) => {
    dispatch({type: 'increment_age'})
  };

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE UI CODE STARTS HERE */}
          <h4 className="mb-8">What's your name?</h4>
          <input
            type="text"
            value={state.name}
            onChange={handleInputChange}
            className="px-2 border-b-2 focus:outline-none block mb-6 text-center w-[300px]"
          />
          <button
            onClick={handleButtonClick}
            className="mb-6 py-1 px-6 border-2 bg-green-200 border-green-300 rounded active:scale-95"
          >
            Increment Age
          </button>
          <p className="text-sm">
            Output: Hey, {state.name}. You are {state.age}.
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
