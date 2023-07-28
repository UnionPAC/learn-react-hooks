import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const CurrentUserContext = createContext(null);

const UpdateObjectViaContext = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Form />
          </CurrentUserContext.Provider>
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
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return (
      <div>
        <p>You logged in as {currentUser.name}.</p>
        <button
          onClick={() => setCurrentUser(null)}
          className="m-6 p-2 px-6 border-2 bg-red-200 border-red-400 rounded active:scale-95"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Geoff" });
      }}
    >
      Login as Geoff
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1 className="text-3xl font-bold tracking-wider mb-6">{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="p-2 px-6 border-2 bg-blue-200 border-blue-400 rounded active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default UpdateObjectViaContext;
