import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import ConfirmationModal from "./ConfirmationModal";

const Example2 = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <div className="flex space-x-5 mb-8 ">
            <button
              onClick={() => setOpen(true)}
              className="border-2 px-3 py-2 rounded text-slate-500"
            >
              Open
            </button>
            <button
              onClick={() => modalRef.current.focusCloseBtn()}
              className="border-2 px-3 py-2 rounded text-slate-500"
            >
              Focus Close
            </button>
            <button
              onClick={() => modalRef.current.focusConfirmBtn()}
              className="border-2 px-3 py-2 rounded text-slate-500"
            >
              Focus Confirm
            </button>
            <button
              onClick={() => modalRef.current.focusDenyBtn()}
              className="border-2 px-3 py-2 rounded text-slate-500"
            >
              Focus Deny
            </button>
          </div>

          <ConfirmationModal
            isOpen={open}
            onClose={() => setOpen(false)}
            ref={modalRef}
          />
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

export default React.forwardRef(Example2);
