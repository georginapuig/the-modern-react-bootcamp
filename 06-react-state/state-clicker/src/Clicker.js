import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 }
    this.getRandom = this.getRandom.bind(this);
  }

  getRandom() {
    let rand = Math.floor(Math.random() * this.props.maxNum);
    this.setState({ num: rand })
  }

  render() {
    let btn;
    
    if (this.state.num == 7) {
      btn = <h1>YOU WIN!</h1>
    } else {
      btn = <button onClick={this.getRandom}>Randon Number</button>
    }

    return (
			<div className='App'>
        <h1>Number is {this.state.num}</h1>
        { btn }
			</div>
		); 
  }
}

export default Clicker;