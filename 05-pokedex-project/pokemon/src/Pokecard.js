import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() { 
    let imgsrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    
    return (
      <div className='Pokecard'>
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgsrc} alt={this.props.name} />
        </div>
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">EXP: {this.props.exp}</p>
      </div>
    );
  }
}
 
export default Pokecard;