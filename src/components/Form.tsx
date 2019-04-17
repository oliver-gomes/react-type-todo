import React, { Component } from "react";
import { render } from "react-dom";

interface IState {
  currentTask: string;
  tasks: Array<string>;
}

export default class Form extends Component<{}, {}> {
  state = {
    currentTask: "",
    tasks: []
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [...this.state.tasks, this.state.currentTask]
    });
  };

  renderTasks = () => {
    return this.state.tasks.map((task: string, index: number) => {
      return <div key={index}>{task}</div>;
    });
  };

  render() {
    return (
      <div>
        <h1>React Typescript Todo List</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.currentTask}
            placeholder="Add a task"
            onChange={e =>
              this.setState({
                currentTask: e.target.value
              })
            }
          />
          <button type="submit">Add Task</button>
        </form>
        <section>{this.renderTasks()}</section>
      </div>
    );
  }
}
