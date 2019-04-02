import React, { Component } from "react";
import "./App.css";

import { Task } from "./models/task";
import { NewTaskForm } from "./components/NewTaskForm";

interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(prevState => ({
      newTask: {
        id: prevState.newTask.id + 1,
        name: ""
      },
      tasks: [...prevState.tasks, prevState.newTask]
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Learning TS!</h1>
        <NewTaskForm
          task={this.state.newTask}
          onChange={this.handleTaskChange}
          onAdd={this.addTask}
        />
      </div>
    );
  }
}

export default App;
