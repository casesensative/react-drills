import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  inputHandler = (inputText) => {
    this.setState({input: inputText})
  }

  render() {
    return (
      <section>
        <h1 className="App">TEXT DISPLAY:</h1>
        <input className="App" type="text" placeholder="enter text here" onChange={e => this.inputHandler(e.target.value)}></input>
        {this.state.input}
      </section>
    )
  }
}

export default App;
