import React, { Component } from "react";

export default class Form extends Component {
  handleSubmit = () => {
    console.log("object");
  };
  render() {
    return (
      <div>
        <h1>React Typescript Todo List</h1>
        <form onSubmit={() => this.handleSubmit()}>
          <input type="text" placeholder="Add a task" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}
