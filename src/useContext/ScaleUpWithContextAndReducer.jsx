import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import { TasksProvider } from "./TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const ScaleUpWithContextAndReducer = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <TasksProvider>
            <h1 className="text-3xl font-semibold mb-4">Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
          </TasksProvider>
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

export default ScaleUpWithContextAndReducer;
