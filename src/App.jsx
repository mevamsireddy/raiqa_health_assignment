import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter.jsx';
import ListView from './components/ListView.jsx';

function App() {
    const [numbers, setNumbers] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        const storedNumbers = localStorage.getItem('numbersList');
        if (storedNumbers) {
            setNumbers(JSON.parse(storedNumbers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('numbersList', JSON.stringify(numbers));
    }, [numbers]);

    const addNumberToList = (number) => {
        if (!numbers.includes(number)) {
            setNumbers([...numbers, number]);
        } else {
            alert("This number is already in the list!");
        }
    };

    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleReset = () => {
        setNumbers([]);
    };

    const sortedNumbers = [...numbers].sort((a, b) => {
        return sortOrder === 'asc' ? a - b : b - a;
    });

    let minVal = null;
    let maxVal = null;
    if (numbers.length > 0) {
        minVal = Math.min(...numbers);
        maxVal = Math.max(...numbers);
    }

    return (
        <div className="app-container">
            <h1>Counter & List App</h1>
            <Counter onAdd={addNumberToList} />
            <ListView
                items={sortedNumbers}
                onSort={handleSort}
                onReset={handleReset}
                minItem={minVal}
                maxItem={maxVal}
            />
        </div>
    );
}

export default App;