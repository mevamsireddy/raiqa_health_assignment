import React from 'react';
import './ListView.css';

function ListView({ items, onSort, onReset, minItem, maxItem }) {
    const getItemClassName = (number) => {
        if (number === minItem && number === maxItem) return 'list-item highlight-min-max';
        if (number === minItem) return 'list-item highlight-min';
        if (number === maxItem) return 'list-item highlight-max';
        return 'list-item';
    };

    return (
        <div className="list-card">
            <div className="list-header">
                <h2>Numbers List</h2>
                <div className="list-controls">
                    <button onClick={onReset} className="reset-button">Reset</button>
                    <button onClick={onSort} className="sort-button">Sort ↓</button>
                </div>
            </div>

            <div className="list-items">
                {items.length === 0 ? (
                    <p className="empty-message">The list is currently empty.</p>
                ) : (
                    items.map((number, index) => (
                        <div className={getItemClassName(number)} key={index}>
                            <span>{number}</span>
                            <span>#{index + 1}</span>
                        </div>
                    ))
                )}
            </div>

            {items.length > 0 && (
                <div className="total-numbers">
                    Total numbers: {items.length}
                </div>
            )}
        </div>
    );
}

export default ListView;