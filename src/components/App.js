import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
    var [advice, setAdvice] = useState('As you know, madness is like gravity...all it takes is a little push.');

    function fetchAdvice() {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function componentDidMount() {
        fetchAdvice();
    };

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{ advice }</h1>
                <button onClick={componentDidMount} className="button">GET ADVICE</button>
            </div>
        </div>

    );
}

export default App;