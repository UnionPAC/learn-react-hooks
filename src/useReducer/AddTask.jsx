import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <div className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-b-2 px-2 border-blue-300 focus:outline-none w-[300px]"
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
        className="text-white p-1 px-6 rounded ml-4 bg-blue-300 active:scale-95 border-2 border-blue-400"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
