import { useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const Checkbox = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [liked, setLiked] = useState(false);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <label>
            <input type="checkbox" checked={liked} onChange={handleChange} className="mb-4" />
          </label>
          <p>You {liked ? 'liked' : "haven't liked"} this</p>
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

export default Checkbox;
