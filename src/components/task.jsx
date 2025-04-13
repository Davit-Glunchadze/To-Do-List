import React from "react";

const Task = ({ id, task, action }) => {
  return (
    <div>
      <h3>
        {id} Task: {task}
      </h3>
      <button onClick={() => action(id)}>Done</button>
    </div>
  );
};

export default Task;
