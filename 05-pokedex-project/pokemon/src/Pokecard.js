import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Pokecard extends Component {
  render() { 
    let imgsrc = `${POKE_API}/${this.props.id}.png`;
    
    return (
      <div className='Pokecard'>
        <h1>{this.props.name}</h1>
        <p>{this.props.id}</p>
        <img src={imgsrc} alt={this.props.name} />
        <p>{this.props.type}</p>
        <p>{this.props.exp}</p>
      </div>
    );
  }
}
 
export default Pokecard;