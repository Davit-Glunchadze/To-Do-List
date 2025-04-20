import { useCallback, useState } from "react";
import Task from "./task";
import Done from "./done";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");

  const [tasks, setTask] = useState([{ id: 1, task: "Do Somethind" }]);

  const [done, setDone] = useState([{ id: 1, done: "Done Something" }]);

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

  // const addDone = useCallback(
  //   (id) => {
  //     const doneTask = tasks.find((t) => t.id === id);

  //     const newDone = {
  //       id: Date.now(),
  //       done: doneTask.task,
  //     };

  //     setTask((prev) => prev.filter((t) => t.id !== id));
  //     setDone((prev) => [...prev, newDone]);
  //   }
  // );

  const addDone = useCallback((id) => {
    setTask((prevTasks) => {
      const doneTask = prevTasks.find((t) => t.id === id);
      setDone((prevDone) => [
        ...prevDone,
        { id: Date.now(), done: doneTask.task },
      ]);
      return prevTasks.filter((t) => t.id !== id);
    });
  }, []);

  const removeDone = useCallback((id) => {
    setDone((prev) => prev.filter((d) => d.id !== id));
  }, []);

  const add = useCallback((id) => {
    setDone((prevDone) => {
      const addTask = prevDone.find((d) => d.id === id);
      const updatedDone = prevDone.filter((d) => d.id !== id);
      setTask((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), task: addTask.done },
      ]);
      return updatedDone;
    });
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
            <h2>To Be Done</h2>
            <div className="addTask">
              {tasks.map((t) => (
                <Task key={t.id} id={t.id} task={t.task} action={addDone} />
              ))}
            </div>
          </div>
          <div className="done">
            <h2>Done</h2>
            <div className="doneTask">
              {done.map((d) => (
                <Done
                  key={d.id}
                  id={d.id}
                  done={d.done}
                  action={removeDone}
                  act={add}
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
