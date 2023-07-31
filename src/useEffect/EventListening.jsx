import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const EventListening = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, []);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <h1 className="text-pink-300 text-lg">Move the 🐭 to get a cool hover effect!</h1>
          <div
            style={{
              position: "absolute",
              backgroundColor: "pink",
              borderRadius: "50%",
              opacity: 0.6,
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              pointerEvents: "none",
              left: -20,
              top: -20,
              width: 40,
              height: 40,
            }}
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

export default EventListening;
