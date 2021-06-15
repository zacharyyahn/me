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
      
      <div className="app-wrapper">
          
        <div className="statement-wrapper">

          
          <div className="statement">
            <h1>I'm Zach Yahn, a computer scientist and engineer inspired by artificial intelligence, 
              the internet of things, and robotics.</h1>
          </div>

          <div className="statement-down-arrow">
            <code>&#8595;</code>
          </div>

        </div>
        
        <div className="projects-wrapper">
        </div>

        <div className="about-me-wrapper">
      
        </div>
        {/* <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
        <Tweet name="Zach" message="Grrr"/>
        <Tweet name="Peasant" message="I'm bad"/>
        <Tweet name="Test" message="123"/> */}
        </div>
    </div>
  );
}

export default App; //export the file