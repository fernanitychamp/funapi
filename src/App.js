import React, { Component } from 'react';
import './App.css';

import Character from './components/Character/Character';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Bienvenidos a funApi</h3>
        <Character name="Andres Fernando" image="" />
      </div>
    );
  }
}

export default App;
