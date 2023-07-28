import { useState, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../TaskContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: { ...task, text: e.target.value },
            });
          }}
          className="m-2"
        />
        <button className="ml-4" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="ml-4" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label className="flex">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked },
          });
        }}
        className="mr-2"
      />
      {taskContent}
      <button className="ml-4" onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </label>
  );
}
