import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <img className='Card' src={this.props.img} alt={this.props.name} />
    );
  }
}

export default Card;