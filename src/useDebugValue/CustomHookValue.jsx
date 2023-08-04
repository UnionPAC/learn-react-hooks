import { useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const CustomHookValue = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
  }

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <StatusBar />
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

export default CustomHookValue;
