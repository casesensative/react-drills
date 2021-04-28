import React from 'react';

class NewTask extends React.Component {
  constructor() {
    super();
    this.state= {
      taskInput: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.enterPress = this.enterPress.bind(this);
  }

  inputHandler(text) {
    this.setState({taskInput: text})
  }

  clearInput() {
    this.props.addTaskFn(this.state.taskInput);
    this.setState({taskInput: ''})
  }

  enterPress(e) {
    if (e.keyCode === 13) {
      this.clearInput();
    }
  }



  render() {
    return (
      <div className="newtask">
        <input type="text" value={this.state.taskInput}className="taskbar" onChange={e => this.inputHandler(e.target.value)}/>
        <button className="addtask" onClick={() => this.clearInput()} onKeyPress={e => this.enterPress(e)}>Add</button>
        <button className="clear" onClick={() => this.props.clearTasksFn()}>Clear List</button>
      </div>
    )
  }

}

export default NewTask;