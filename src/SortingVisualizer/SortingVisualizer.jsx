import React from 'react';
import './SortingVisualizer.css';

const NUM_ARRAY_BARS = 10;
const COLOR = '#2a9d8f';
const ANIMATION_SPEED = 500;

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
    // this.setState(bubbleSort(this.state.array));
    const animations = bubbleSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      
      const arrayBars = document.getElementsByClassName('array-bar');

      const [change, b1i, b2i, h1, h2] = animations[i];
      const barOneStyle = arrayBars[b1i].style;
      const barTwoStyle = arrayBars[b2i].style;

      if (change == 'colorChange') {
        setTimeout(() => {
          barOneStyle.backgroundColor = 'blue';
          barTwoStyle.backgroundColor = 'blue';
        }, i * ANIMATION_SPEED);
      } else if (change == 'noColorChange') {
        setTimeout(() => {
          barOneStyle.backgroundColor = COLOR;
          barTwoStyle.backgroundColor = COLOR;
        }, i * ANIMATION_SPEED);
      } else if (change == 'heightChange') {
        setTimeout(() => {
          barOneStyle.height = `${h1}px`;
          barTwoStyle.height = `${h2}px`;
        }, i * ANIMATION_SPEED);
      }
    }

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
          <div className="array-bar" key={index} style={{backgroundColor: COLOR, height:`${value}px`,}}></div>
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

  const animations = [];

  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // push values we are comparing
      animations.push(["colorChange", i, j, 0, 0]); // push once to change colors
      animations.push(["noColorChange", i, j, 0, 0]); // push again to revert colors
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        animations.push(["heightChange", j, j+1, arr[j], arr[j+1]])
      }
    }
  }
  return animations;
}


