import React from "react";
import styles from "./done.module.css";

const Done = ({ id, done, action, act}) => {
  return (
    <div>
      <div>
        <h3 className={styles.doneTitle}>Task: {done}</h3>
        <div className={styles.buttons}>
          <button onClick={() => action(id)}>Remove</button>
          <button onClick={() => act(id)}>Undo</button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Done);
