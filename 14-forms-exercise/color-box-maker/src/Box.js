import React, { Component } from 'react'

export default class Box extends Component { 
  render() {
    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      backgroundColor: this.props.color
    }

    return (
      <div>
        <div style={style}></div>
        <button onClick={this.props.removeBox}>X</button>
      </div>
    )
  }
}
