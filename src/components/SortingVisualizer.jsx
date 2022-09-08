import React from "react";
import "./SortingVisualizer.css";
import getAnimations from "../sortingAlgorithm/BubbleSort";
import { getMergeSortAnimations } from "../sortingAlgorithm/MergeSort";

// This is the main color of the array bars.
const PRIMARY_COLOR = `#819595`;
const SECONDARY_COLOR = `#56351E`;
const TOTAL_BARS = 100;
const ANIMATION_SPEED = 3;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      barWidth: 10,
    };
  }

  componentDidMount() {
    this.resetArray();
    this.setBarWidth(TOTAL_BARS);
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < TOTAL_BARS; i++) {
      array.push(randomIntFromInterval(5, 625));
    }
    this.setState({ array });
  }

  bubbleSort() {
      const animations = getAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = animations[i][2];
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
        }
      }
    }

  mergeSort() {
      const animations = getMergeSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
        }
      }
    }
    

  setBarWidth(totalBars) {
    var userScreenWidth = window.innerWidth
    
    const newWidth = (userScreenWidth *.75)/ totalBars;
    this.setState({ barWidth: newWidth });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="app">
        <div className="navbar">
          <div className='button-container'>
            <button onClick={() => this.resetArray()}>Reset Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
          </div>
        </div>
        <div className='array-container'>
          {array.map((value, idx) => (
            <div
              className='array-bar'
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${this.state.barWidth}px`,
              }}></div>
          ))}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
