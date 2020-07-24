import React, { useState } from 'react';
import * as Algorithm from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css';


const SortingVisualizer = () => {
    const [array, setArray] = useState(randomArray());

    return (
        <div>
            <header className="header">
                <h1>Sorting Visualizer</h1>
                <div onClick={() => setArray(randomArray())}>
                    <h3>Generate new array</h3>
                </div>
                <div onClick={() => bubbleSort(array, setArray)}>
                    <h3>Bubble Sort</h3>
                </div>
            </header>
            <div className="array-bar-container">
                {array.map((value, id) => (
                    <div
                        className="array-bar"
                        key={id}
                        style={{ height: `${value * 80 / 1000}vh` }}>
                    </div>
                ))}
            </div>
            {/* <p>Nb comparisons: </p> */}
        </div>
    );
}


const bubbleSort = (array, setArray) => {
    const animations = Algorithm.bubbleSort(array.slice());
    const len = animations.length;
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < len; i++) {
        let firstBarStyle = arrayBars[animations[i].comparison[0]].style;
        let secondBarStyle = arrayBars[animations[i].comparison[1]].style;
        setTimeout(() => {
            firstBarStyle.backgroundColor = '#34A853';
            secondBarStyle.backgroundColor = '#34A853';
        }, i * 10);
        if (animations[i].swap) {
            setTimeout(() => {
                firstBarStyle.backgroundColor = '#EA4335';
                secondBarStyle.backgroundColor = '#EA4335';
            }, (i + 0.1) * 10);
            setTimeout(() => {
                let tmp = firstBarStyle.height;
                firstBarStyle.height = secondBarStyle.height;
                secondBarStyle.height = tmp;
            }, i * 10);
        }
        setTimeout(() => {
            firstBarStyle.backgroundColor = '#FBBC05';
            secondBarStyle.backgroundColor = '#FBBC05';
        }, (i + 0.6) * 10);
    }
}

const randomArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
        array.push(randomIntFromInterval(5, 1000));
    }
    return array;
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;