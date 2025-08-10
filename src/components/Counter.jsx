import React, { useState } from 'react';
import './Counter.css';

function Counter({ onAdd }) {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const AddClick = () => {
        if (count > 0) {
            onAdd(count);
            setCount(0);
        }
    };

    return (
        <div className="counter-card">
            <h2>Counter</h2>
            <div className="counter-display">
                <button onClick={Decrement}>-</button>
                <span>{count}</span>
                <button onClick={Increment}>+</button>
            </div>
            <button className="add-button" onClick={AddClick}>
                Add to List
            </button>
        </div>
    );
}

export default Counter;