import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const API_URL_BASE = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = { deck: null, img: '', cardName: ''}
  }

  getData = async () => {
    let getData = await axios.get(`${API_URL_BASE}/new/shuffle`);
    this.setState({deck: getData.data});
  }

  componentDidMount() {
    this.getData();
  }

  getCard = async () => {
    const { deck_id } = this.state.deck;

    try {
      let cardRes = await axios.get(`${API_URL_BASE}${deck_id}/draw/`);
      console.log(cardRes.data.remaining);
      
      if (!cardRes.data.success) {
        this.getData();
        throw new Error('No cards left');
      }

      let card = cardRes.data.cards[0];
      this.setState({
        img: card.image,
        cardName: `${card.value} of ${card.suit}`
      });
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <div>
        <h1>Card dealer</h1>
        <Card img={this.state.img} name={this.state.cardName} />
        <button onClick={this.getCard}>GET CARD</button>
      </div>
    );
  }
}

export default Deck;