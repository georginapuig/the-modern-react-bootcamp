import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  render() {
    const { numberWords, val, locked, disabled } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += 'Die-locked';
    return <i className={classes} onClick={() => this.props.handleClick(this.props.idx)} disabled={disabled} />
  }
}

export default Die;
