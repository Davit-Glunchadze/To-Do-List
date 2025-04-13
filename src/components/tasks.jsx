import { Component } from "react";
import Task from "./task";
import Done from "./done";

class ToDoList extends Component {
  state = {
    inputValue: " ",
    tasks: [{ id: "1", task: "Do Somethind" }],
    done: [{ id: "1", done: "Done Something" }],
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

  addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: this.state.tasks.length + 1,
      task: this.state.inputValue,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      inputValue: "",
    });
  };

  addDone = (id) => {
    const doneTask = this.state.tasks.find((t) => t.id === id);
    const updatedTasks = this.state.tasks.filter((t) => t.id !== id);

    const newDone = {
      id: Date.now(),
      done: doneTask.task,
    };

    this.setState({
      tasks: updatedTasks,
      done: [...this.state.done, newDone],
    });
  };

  removeDone = (id) => {
    const done = this.state.done.filter((d) => d.id !== id);
    this.setState({
      done,
    });
  };

  add = (id) => {
    const addTask = this.state.done.find((n) => n.id === id);
    const updated = this.state.done.filter((n) => n.id !== id);

    const newTask = {
      id: this.state.tasks.length + 1,
      task: addTask.done,
    };

    this.setState({
      done: updated,
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    return (
      <div className="main">
        <h1>To DO List</h1>
        <div className="input">
          <form onSubmit={this.addTask}>
            <input
              type="text"
              placeholder="Enter your task"
              onChange={this.onChange}
              value={this.state.inputValue}
            />
            <button type="submit">Add Task</button>
          </form>
          <div className="list">
            <div className="toBeDone">
              <h2>To Be Done</h2>
              <div className="addTask">
                {this.state.tasks.map((t) => (
                  <Task
                    key={t.id}
                    id={t.id}
                    task={t.task}
                    action={this.addDone}
                  />
                ))}
              </div>
            </div>
            <div className="done">
              <h2>Done</h2>
              <div className="doneTask">
                {this.state.done.map((d) => (
                  <Done
                    key={d.id}
                    id={d.id}
                    done={d.done}
                    action={this.removeDone}
                    act={this.add}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
