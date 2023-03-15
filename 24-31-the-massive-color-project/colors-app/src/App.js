import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <Palette colors={{ ...seedColors[4] }} />
      </div>
    );
  }
}

export default App;
