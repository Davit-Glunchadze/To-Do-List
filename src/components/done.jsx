import React from "react";

const Done = ({ id, done, action, act }) => {
  return (
    <div>
      <h3>
        {id} Task: {done}
      </h3>
      <div className="buttons">
        <button onClick={() => action(id)}>Remove</button>
        <button onClick={() => act(id)}>Undo</button>
      </div>
    </div>
  );
};

export default Done;
