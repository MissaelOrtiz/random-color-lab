import React, { Component } from 'react';
import Display from '../components/Display';

const colors = ['red', 
  'blue', 
  'yellow', 
  'gray', 
  'black', 
  'magenta', 
  'maroon', 
  'mint', 
  'aqua', 
  'gold', 
  'beige'];

export default class RandomColor extends Component {
    state = {
      color: 'beige',
      image: ''
    }

    doRandomColorChange = () => {
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      if(colors[randomColorIndex] === this.state.color) {
        // SOMETHING GOES HERE
      } else { this.setState({ color: colors[randomColorIndex] }); }
    }

    componentDidMount() {
      setInterval(() => this.doRandomColorChange(), 1000);
    }

    render() {
      
      return (
        <Display color={this.state.color} />
      );
    }
}
