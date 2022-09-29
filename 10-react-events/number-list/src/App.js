import React, { Component } from "react";
import NumberList from "./NumberList";
import BetterNumberList from "./BetterNumberList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NumberList />
        <BetterNumberList />
      </div>
    );
  }
}

export default App;
