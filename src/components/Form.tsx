import React, { Component } from "react";
import { render } from "react-dom";

interface IState {
  currentTask: string;
  tasks: Array<ITask>;
}

interface ITask {
  id: number;
  value: string;
  completed: boolean;
}

export default class Form extends Component<{}, IState> {
  state = {
    currentTask: "",
    tasks: []
  };

  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: this._timeInMilliseconds(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
  };

  public deleteTask = (id: number) => {
    const filteredTasks: Array<ITask> = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    );
    this.setState({
      tasks: filteredTasks
    });
  };

  public renderTasks = () => {
    return this.state.tasks.map((task: ITask, index: number) => {
      return (
        <div key={task.id}>
          <span>{task.value}</span>
          <button onClick={() => this.deleteTask(task.id)}>Delete</button>
        </div>
      );
    });
  };

  public render() {
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
  private _timeInMilliseconds(): number {
    const date: Date = new Date();
    return date.getTime();
  }
}
