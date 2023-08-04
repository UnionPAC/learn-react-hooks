import { useSyncExternalStore } from "react";
import { todoStore } from "./todoStore";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const SubscribeToExternalStore = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <button className="mb-5 px-4 border-2 py-2 rounded bg-blue-200 border-blue-300 active:scale-95" onClick={() => todoStore.addTodo()}>Add Todo</button>
          <ul>
            {todos.map((todo) => {
              return <li className="list-disc my-2" key={todo.id}>{todo.text}</li>;
            })}
          </ul>
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

export default SubscribeToExternalStore;
