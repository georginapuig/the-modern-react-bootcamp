import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Pokecard extends Component {
  render() { 
    let imgsrc = `${POKE_API}/${this.props.id}.png`;
    
    return (
      <div className='Pokecard'>
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <p>{this.props.id}</p>
        <img src={imgsrc} alt={this.props.name} />
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">EXP: {this.props.exp}</p>
      </div>
    );
  }
}
 
export default Pokecard;