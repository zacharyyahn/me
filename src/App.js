import React, {useState} from 'react';
import Hello from './sayHello';
import './App.css';

function App() { //just a normal JS function

  // const [isRed, setRed] = useState(false); //these states save data. Uses ternary operator below
  // const [count, setCount] = useState(0); //count is the variable, setCount is the function

  // const increment = () => { //create an increment function that uses setCount to increment the count var
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

  return(
    <div className="app">
        <div className="title-wrapper">
          <div className="title-sidebar">
          <p>Z</p><p>A</p><p>C</p><p>H</p><p>-</p>
          <p>Y</p><p>A</p>
          <p>H</p><p>N</p>
          </div>
          <div className="statement">
            <h1>I'm a computer scientist and engineer inspired by artificial intelligence 
              and fueled by excitement for the unknown.</h1>
          </div>
          <div className="title-sidebar"></div>
        </div>
        {/* <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
        <Tweet name="Zach" message="Grrr"/>
        <Tweet name="Peasant" message="I'm bad"/>
        <Tweet name="Test" message="123"/> */}
    </div>
  );
}

export default App; //export the file