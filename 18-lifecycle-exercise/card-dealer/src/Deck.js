import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';


const API_URL_BASE = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = { deck: null, drawn: []}
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
      console.log(cardRes.data);
      
      if (!cardRes.data.success) {
        this.getData();
        throw new Error('No cards left');
      }

      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            img: card.image,
            cardName: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (error) {
      alert(error)
    }
  }

  render() {
    const cards = this.state.drawn.map(card => {
      return <Card key={card.id} img={card.img} name={card.cardName} />
    });
    return (
      <div>
        <h1>Card dealer</h1>
        <button onClick={this.getCard}>GET CARD</button>
        <div className='Deck-cardarea'>{cards}</div>
      </div>
    );
  }
}

export default Deck;