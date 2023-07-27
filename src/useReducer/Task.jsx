import { useState } from "react";

function Task({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div>
        <input
          className="mx-3"
          value={task.text}
          onChange={(e) => {
            onEdit({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className="mr-4 hover:text-green-400" onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex">
        <div className="mr-6">{task.text}</div>

        <button className="mr-4 hover:text-orange-300" onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }
  return (
    <label className="flex my-2">
      <input
        className="mr-4"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onEdit({
            ...task,
            done: e.target.checked,
          });
        }}
      />

      {taskContent}
      <button className="hover:text-red-500" onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}

export default Task;
