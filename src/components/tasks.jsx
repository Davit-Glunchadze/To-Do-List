import { useCallback, useState } from "react";
import Task from "./task";
import Done from "./done";
import InProgress from "./inProgress";
import styles from "./done.module.css";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");

  const [tasks, setTask] = useState([{ id: 1, task: "Do Something" }]);

  const [inProgress, setInProgress] = useState([
    { id: 1, inProgress: "Done Something" },
  ]);

  const [done, setDone] = useState([{ id: 1, done: "Remove Something" }]);

  const onChange = (event) => setInputValue(event.target.value);

  const addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      task: inputValue,
    };

    setTask((prev) => [...prev, newTask]);
    setInputValue("");
  };

  const tasksNums = (arr) => {
    return arr.length;
  };

  const addInProgress = useCallback((id) => {
    setTask((prevTasks) => {
      const progressTask = prevTasks.find((t) => t.id === id);
      setInProgress((prevDone) => [
        ...prevDone,
        { id: Date.now(), inProgress: progressTask.task },
      ]);
      return prevTasks.filter((i) => i.id !== id);
    });
  }, []);

  const addInDone = useCallback((id) => {
    setInProgress((prevDone) => {
      const addTask = prevDone.find((d) => d.id === id);
      const updatedDone = prevDone.filter((d) => d.id !== id);
      setDone((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), done: addTask.inProgress },
      ]);
      return updatedDone;
    });
  }, []);

  const undoInProgress = useCallback((id) => {
    setInProgress((prevDone) => {
      const addTask = prevDone.find((d) => d.id === id);
      const updatedDone = prevDone.filter((d) => d.id !== id);
      setTask((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), task: addTask.inProgress },
      ]);
      return updatedDone;
    });
  }, []);

  const undoInDone = useCallback((id) => {
    setDone((prevDone) => {
      const addTask = prevDone.find((d) => d.id === id);
      const updatedDone = prevDone.filter((d) => d.id !== id);
      setInProgress((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), inProgress: addTask.done },
      ]);
      return updatedDone;
    });
  }, []);

  const removeTask = useCallback((id) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const removeDone = useCallback((id) => {
    setDone((prev) => prev.filter((d) => d.id !== id));
  }, []);

  return (
    <div className="main">
      <h1>To DO List</h1>
      <div className="input">
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Enter your task"
            onChange={onChange}
            value={inputValue}
          />
          <button type="submit">Add Task</button>
        </form>
        <div className="list">
          <div className="toBeDone">
            <h2>To Be Done: {tasksNums(tasks)}</h2>
            <div className="addTask">
              {tasks.map((t, index) => (
                <Task
                  key={t.id}
                  id={t.id}
                  task={t.task}
                  index={index}
                  action={addInProgress}
                  act={removeTask}
                />
              ))}
            </div>
          </div>
          <div className="inprogress">
            <h2>In Progress: {tasksNums(inProgress)}</h2>
            <div className="doneTask">
              {inProgress.map((i, index) => (
                <InProgress
                  key={i.id}
                  id={i.id}
                  inProgress={i.inProgress}
                  index={index}
                  action={addInDone}
                  act={undoInProgress}
                />
              ))}
            </div>
          </div>
          <div className={styles.done}>
            <h2>Done: {tasksNums(done)}</h2>
            <div>
              {done.map((d, index) => (
                <Done
                  key={d.id}
                  id={d.id}
                  done={d.done}
                  index={index}
                  action={removeDone}
                  act={undoInDone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ToDoList;
