import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from './helpers'

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tails', imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'}
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    console.log(this.props.coins[1].imgSrc);
    return (
      <div className="CoinContainer">
        <h2>Let's flip a coin</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>FLIP MEE</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{ " "} heads and {this.state.nTails} tails</p>
      </div>
    )
  }
}
