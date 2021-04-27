import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animals: ['monkey', 'turtle', 'peacock', 'crocodile', 'parrot', 'mole', 'cat'],
      searchInput: ''
    }
  }


  inputHandler = (text) => {
    this.setState({searchInput: text})
  }

  render() {
    const {animals} = this.state;
    const {searchInput} = this.state;

    let animalsDisplay = animals.map((e) => {
      if (e.includes(searchInput)) {
      return <h2>{e}</h2>
      }
    })

    return (
      <section className="main">
        <input type="text" placeholder="search here..." onChange={e => this.inputHandler(e.target.value)}/>
        {animalsDisplay}
      </section>
    )
  }
}

export default App;
