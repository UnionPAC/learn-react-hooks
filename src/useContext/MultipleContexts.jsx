import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import './styles.css'

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

const MultipleContexts = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider
              value={{ currentUser, setCurrentUser }}
            >
              <WelcomePanel />
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => {
                  setTheme(e.target.checked ? "dark" : "light");
                }}
                className="mr-2 mt-4"
              />
              <label>Use dark mode</label>
            </CurrentUserContext.Provider>
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

function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p className="my-4">You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  return (
    <div className="flex flex-col my-6">
      <label>
        First name{": "}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mb-3 px-2 py-1 mx-2 border-2 bg-transparent"
        />
      </label>
      <label>
        Last name{": "}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mb-3 px-2 py-1 mx-2 border-2 bg-transparent"
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + " " + lastName,
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && (
        <i className="text-red-500 text-sm tracking-wide mt-6">Error: Fill in both fields.</i>
      )}
    </div>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={`${className}`}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default MultipleContexts;
