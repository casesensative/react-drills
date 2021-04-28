import React from 'react';
import './App.css';
import Todo from './Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      tasks: [],
    }
    this.addTask = this.addTask.bind(this);
  }

  inputHandler = (text) => {
    this.setState({newTask: text});
  }

  addTask() {
    this.setState({tasks: [...this.state.tasks, this.state.newTask],
    newTask: '' })

  }

  render() {
    return (
      <section className="main">
        <h1>My To-Do List:</h1>
        <input value={this.state.newTask} type="text" name="userInput" placeholder="enter task" onChange={e => this.inputHandler(e.target.value)} />
        <button type="reset" onClick={() => this.addTask()}>Add</button>
        <Todo tasks={this.state.tasks}/>
        <button className="clear" onClick={() => this.setState({tasks: []})}>Clear</button>
      </section>
    )
  }
}

export default App;
