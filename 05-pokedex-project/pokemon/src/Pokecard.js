import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Pokecard extends Component {
  render() { 
    let imgsrc = `${POKE_API}/${this.props.id}.png`
    return (
      <div className='Pokecard'>
        <h1>{this.props.name}</h1>
        <img src={imgsrc} alt={this.props.name} />
      </div>
    );
  }
}
 
export default Pokecard;