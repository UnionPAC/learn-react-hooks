import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const Modal = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <button onClick={() => setIsOpen(true)}>Open Dialog</button>
          <ModalDialog isOpen={isOpen}>
            <p className="mb-4">Hello! 🙂</p>
            <button className="px-4 py-1 rounded bg-black text-white" onClick={() => setIsOpen(false)}>Close</button>
          </ModalDialog>
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

function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog className="p-8 rounded border-2 border-black" ref={ref}>{children}</dialog>;
}

export default Modal;
