import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return { id: i, isSelected: i === 29_999_998 };
});

const ExpensiveCalculation = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  /* 
  This is a VERY expensive calculation, and will re-run on every re-render of the component,
  unless we use the useMemo hook
  */
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <h3 className="text-xl mb-4">Count: {count}</h3>
          <h3 className="text-xl mb-8">Selected Item: {selectedItem?.id}</h3>
          <button
            className="px-6 py-2 border-2 border-blue-400 bg-blue-200 rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment
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

export default ExpensiveCalculation;
