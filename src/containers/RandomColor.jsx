import React, { Component } from 'react';
import Display from '../components/Display';

export default class RandomColor extends Component {
    state = {
      color: 'beige'
    }

    doRandomColorChange = () => {
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
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      this.setState({ color: colors[randomColorIndex] });
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
