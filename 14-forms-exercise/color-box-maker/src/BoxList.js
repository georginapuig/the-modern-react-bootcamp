import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

export default class BoxList extends Component {
  render() {
    return (
      <div>
        <Box />
        <BoxForm />
      </div>
    )
  }
}
