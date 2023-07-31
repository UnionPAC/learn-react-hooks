import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const TriggerAnimation = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  return (
    <>
      <Link reloadDocument to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <LongSection />
          <Box />
          <LongSection />
          <Box />
          <LongSection />
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

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>;
}

function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    });
    observer.observe(div, {
      threshold: 1.0,
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
}

export default TriggerAnimation;
