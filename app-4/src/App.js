import React from 'react';
import './App.css';
import Login from './Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      passInput: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(text, target) {
    this.setState({[target]: text})
  }

  showLogin = () => {
    alert(`Your username is ${this.state.userInput}, and your password is ${this.state.passInput}`)
  }


  render() {
    return (
      <section className="main">
        <Login inputHandlerFn={this.inputHandler} showLoginFn={this.showLogin}/>
      </section>
    )
  }
}


export default App;
