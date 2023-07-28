import { useState, useContext } from "react";
import { TasksDispatchContext } from "../TaskContext";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-b-2 px-4 mb-6 mx-4"
      />
      <button
        onClick={() => {
          if (text) {
            setText("");
            dispatch({ type: "added", id: nextId++, text: text });
          } else {
            alert("please enter a task");
          }
        }}
        className="px-4 py-1 rounded border-blue-400 border-2 bg-blue-300"
      >
        Add
      </button>
    </>
  );
}
