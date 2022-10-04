import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <li>{this.props.todo}</li>
    
        <div>
          <button>edit</button>
          <button onClick={this.props.removeItem}>X</button>
        </div>
      </div>
    )
  }
}
