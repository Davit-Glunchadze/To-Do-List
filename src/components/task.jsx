import React from "react";
import { TaskH3, Buttons } from "./taskStyle";

const Task = ({ id, task, action, act, index }) => {
  console.log(index)
  return (
    <div>
      <TaskH3
        $border={
          index === 0
            ? "2px solid blue"
            : index === 1
            ? "2px solid red"
            : index === 2
            ? "2px solid yellow"
            : "2px solid green"
        }
        $borderLeft={
          index === 0
            ? "5px solid blue"
            : index === 1
            ? "5px solid red"
            : index === 2
            ? "5px solid yellow"
            : "5px solid green"
        }
      >
        Task:{task}
      </TaskH3>
      <Buttons>
        <button onClick={() => act(id)}>Remove</button>
        <button onClick={() => action(id)}>In Progress</button>
      </Buttons>
    </div>
  );
};

export default React.memo(Task);
