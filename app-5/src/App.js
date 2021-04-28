import React from 'react';
import './App.css';
import Image from './Image';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: 'https://pbs.twimg.com/media/DeVCjXbUQAUizLV.jpg'
    }
  }

  render() {
    return (
      <Image image={this.state.image}/>
    )
  }
}

export default App;
