import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import "./styles.css";

// Initializing the ThemeContext
const ThemeContext = createContext(null);

const UpdateValueViaContext = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [theme, setTheme] = useState("light");

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <ThemeContext.Provider value={theme}>
            <Form />
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
              className="mt-6 mx-3"
            />
            <label>Use dark mode</label>
          </ThemeContext.Provider>
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

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Signup</Button>
      <Button>Login</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={`${className}`}>
      <h1 className="text-3xl font-semibold mb-8">{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button
      className={`${className} mx-6 px-6 py-2 border-2 rounded active:scale-95`}
    >
      {children}
    </button>
  );
}

export default UpdateValueViaContext;
