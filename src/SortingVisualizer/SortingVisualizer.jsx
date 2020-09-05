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

  bubbleSort() {
    this.setState(bubbleSort(this.state.array));
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
      <div className="array">
        {array.map((value, index) => (
          <div className="array-bar" key={index} style={{height:`${value}px`}}></div>
        ))}
        <div className="buttons">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => alert("Algorithm not implemented yet...")}>Quick Sort</button>
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

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]; 
        arr[j] = arr[j+1]; 
        arr[j+1] = temp;  
      }
    }
  }
  return arr;
}

