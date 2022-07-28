import React from 'react'
import "./Navbar.css"

function Navbar({ bubbleSort, mergeSort, createArray }) {
    return (
        <div className='navbar'>
            <div className='button-container'>
                <button onClick={() => createArray}>Create New Array</button>
                <button onClick={() => bubbleSort}>Bubble Sort</button>
                <button onClick={() => mergeSort}>Merge Sort</button>
            </div>
        </div>
    )
}

export default Navbar