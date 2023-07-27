import { useReducer } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    // update the task with the id equal to the action id
    case "edit": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    // filter out task with id equal to action id
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

let nextId = 3;

const TodoList = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({ type: "add", id: nextId++, text: text });
  };

  const handleEditTask = (task) => {
    dispatch({ type: "edit", task: task });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "delete", id: taskId });
  };

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE UI CODE STARTS HERE */}
          <h1 className="text-2xl font-semibold mb-4">Prague itinerary</h1>
          {/* Add Task Component */}
          <AddTask onAddTask={handleAddTask} />
          {/* Task List Component */}
          <TaskList
            tasks={tasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
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

export default TodoList;
