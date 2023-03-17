import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './ColorsHelpers';
import seedColors from './seedColors';

export default class Palettes extends Component {
  render() {
    const { palettes } = this.props;
    const palette = palettes.map((palette) => {
      return <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>;
    });

    return <div>{palette}</div>;
  }
}
