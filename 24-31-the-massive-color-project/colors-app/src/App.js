import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorsHelpers';
import seedColors from './seedColors';
import Palette from './Palette';
import './App.css';
class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>INDIVIDUAL PALETTE</h1>}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
