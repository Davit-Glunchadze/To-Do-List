import React from "react";

const Task = ({ id, task, action }) => {
  console.log('task, id')
  return (
    <div>
      <h3>Task:{task}</h3>
      <button onClick={() => action(id)}>Done</button>
    </div>
  );
};

export default React.memo(Task);
