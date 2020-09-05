import React from 'react';
import './SortingVisualizer.css';

const NUM_ARRAY_BARS = 150;

export default class SortingVisualizer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  quickSort() {
    
  }
  
  resetArray() {
    const array = [];
    for (let i = 0; i < NUM_ARRAY_BARS; i++) {
        array.push(generateRandomInt());
    }
    this.setState({array});
  }

  render() {
    const {array} = this.state;

    return (
      <div class="array">
        {array.map((value, index) => (
          <div class="array-bar" key={index} style={{height:`${value}px`}}></div>
        ))}
        <div class="buttons">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => alert("Algorithm not implemented yet...")}>Selection Sort</button>
          <button onClick={() => alert("Algorithm not implemented yet...")}>Insertion Sort</button>
          <button onClick={() => alert("Algorithm not implemented yet...")}>Merge Sort</button>
        </div>
      </div>
    );
  }
}

// Helper Methods

/**
 * Generate random integer between 10 and 500.
 */
function generateRandomInt() {
  return Math.floor(Math.random() * 500) + 10;
}



