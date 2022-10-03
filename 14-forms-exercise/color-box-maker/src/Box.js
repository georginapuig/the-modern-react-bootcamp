import React, { Component } from 'react'

export default class Box extends Component { 
  render() {
    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      backgroundColor: this.props.color
    }

    return (
      <div style={style}></div>
    )
  }
}
