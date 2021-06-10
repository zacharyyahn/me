import React from 'react';
import './App.css';

function Tweet({ name, message }) {
    return(//assign custom css for the .tweet class with className
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet