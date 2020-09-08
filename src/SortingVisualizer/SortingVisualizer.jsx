import React from 'react';
import './SortingVisualizer.css';

const NUM_ARRAY_BARS = 15;
const PRIMARY_COLOR = '#2a9d8f';
const COMPARING_COLOR = '#e9c46a';
const ANIMATION_SPEED = 200;

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
    const animations = getBubbleSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      
      const arrayBars = document.getElementsByClassName('array-bar');

      const [change, bar1Index, bar2Index, height1, height2] = animations[i];
      const barOneStyle = arrayBars[bar1Index].style;
      const barTwoStyle = arrayBars[bar2Index].style;

      if (change == 'colorChange') {
        setTimeout(() => {
          barOneStyle.backgroundColor = COMPARING_COLOR;
          barTwoStyle.backgroundColor = COMPARING_COLOR;
        }, i * ANIMATION_SPEED);
      }
      if (change == 'noColorChange') {
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED);
      }
      if (change == 'heightChange') {
        setTimeout(() => {
          barOneStyle.height = `${height1}px`;
          barTwoStyle.height = `${height2}px`;
        }, i * ANIMATION_SPEED);
      }
    }

  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName('array-bar');

      const [change, bar1Index, bar2Index, height1, height2] = animations[i];
      const barOneStyle = arrayBars[bar1Index].style;
      const barTwoStyle = arrayBars[bar2Index].style;

      if (change == 'colorChange') {
        setTimeout(() => {
          barOneStyle.backgroundColor = COMPARING_COLOR;
          barTwoStyle.backgroundColor = COMPARING_COLOR;
        }, i * ANIMATION_SPEED);
      }
      if (change == 'noColorChange') {
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED);
      }
      if (change == 'heightChange') {
        setTimeout(() => {
          barOneStyle.height = `${height1}px`;
          barTwoStyle.height = `${height2}px`;
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
          <div className="array-bar" key={index} style={{backgroundColor: PRIMARY_COLOR, height:`${value}px`,}}></div>
        ))}
        <div className="buttons">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => alert("Algorithm not implemented yet...")}>Quick Sort</button>
          <button onClick={() => alert("Algorithm not implemented yet...")}>Selection Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
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

function getBubbleSortAnimations(arr) {

  const animations = [];

  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // push values we are comparing
      animations.push(["colorChange", j, j+1, 0, 0]); // push once to change colors
      animations.push(["noColorChange", j, j+1, 0, 0]); // push again to revert colors
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

function getInsertionSortAnimations(arr) {
  const animations = [];
  const len = arr.length; 
  for (let i = 1; i < len; ++i) { 
    const key = arr[i]; 
    let j = i - 1; 

    /* Move elements of arr[0..i-1], that are 
       greater than key, to one position ahead 
       of their current position */
    
    while (j >= 0 && arr[j] > key) { 

      animations.push(["colorChange", j, j+1, 0, 0]);
      animations.push(["noColorChange", j, j+1, 0, 0]);
      arr[j + 1] = arr[j];
      animations.push(["heightChange", j, j+1, key, arr[j+1]]);
      j = j - 1; 
    } 

    arr[j + 1] = key; 
  } 
  return animations;
}



