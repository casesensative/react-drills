import React from 'react';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState({tasks: [...this.state.tasks, task ]})
  }


  clearTasks = () => this.setState({tasks: []})

  render() {
    return (
      <section className="main">
        <h1>My To-Do List:</h1>
        <NewTask addTaskFn={this.addTask} clearTasksFn={this.clearTasks}/>
        <List tasks={this.state.tasks} />
      </section>

    )
  }
}

export default App;
