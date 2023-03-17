import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

export default class Palettes extends Component {
  render() {
    const { palettes } = this.props;
    const palette = palettes.map((palette) => {
      return (
        <Link to={`/palette/${palette.id}`}>
          <MiniPalette {...palette} />
        </Link>
      );
    });

    return (
      <div>
        <h1>react colors</h1>
        {palette}
      </div>
    );
  }
}
