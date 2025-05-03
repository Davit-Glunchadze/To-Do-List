import React from "react";
import { InProgressTasks, Buttons } from "./inProgressStyle";

const InProgress = ({ id, inProgress, action, act, index }) => {
  return (
    <div>
      <InProgressTasks
        $border={
          index === 0
            ? "2px solid red"
            : index === 1
            ? "2px solid yellow"
            : index === 2
            ? "2px solid blue"
            : "2px solid green"
        }
        $borderLeft={
          index === 0
            ? "5px solid red"
            : index === 1
            ? "5px solid yellow"
            : index === 2
            ? "5px solid blue"
            : "5px solid green"
        }
      >
        Task: {inProgress}
      </InProgressTasks>
      <Buttons>
        <button onClick={() => action(id)}>done</button>
        <button onClick={() => act(id)}>Undo</button>
      </Buttons>
    </div>
  );
};

export default React.memo(InProgress);
