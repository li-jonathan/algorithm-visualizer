import React from 'react';

const NUM_ARRAY_BARS = 100;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        array: [],
      };
    }
  
    renderArray() {
      return;
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUM_ARRAY_BARS; i++) {
            array.push(this.generateRandomInt());
        }
        this.setState({array});
    }

    generateRandomInt() {
        return Math.floor(Math.random() * 500) + 10;
    }

}