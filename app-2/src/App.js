import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ['this', 'is', 'an', 'array', 'of', 'strings'],
    }
  }

  render() {
      let list = this.state.list.map((e) => {
        return <h2 className="App">{e}</h2>
      })

    return (
      <section className="main">
        {list}
      </section>
    )
  }
}

export default App;
