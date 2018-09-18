import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import Character from './components/Character/Character';


const App = ({characters}) => (
  <div className="App">
    <h3>Bienvenidos a funApi</h3>
    {characters.map(char =>
      <Character
        key={char.id} 
        name={char.name} image={char.image} />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(App);
