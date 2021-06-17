import React, {useState, useEffect} from 'react';
import Hello from './sayHello';
import './App.css';
import PropagateLoader from "react-spinners/PropagateLoader";
import github from './github.png';
import linkedin from './linkedin.jpg';

function App() { //just a normal JS function

  // const [isRed, setRed] = useState(false); //these states save data. Uses ternary operator below
  // const [count, setCount] = useState(0); //count is the variable, setCount is the function

  // const increment = () => { //create an increment function that uses setCount to increment the count var
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return(
    <div className="app">
      {
        loading ?
        <div className="spinner">
        <PropagateLoader color={"#7F2BB9"} loading={loading} size={15} />
        </div>
        :
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

        <div className="about-me-wrapper">
          <div className="about-me-text">
            <div className="about-me-text-title">
            <h2> About Me </h2>
            </div>
            <div className="about-me-text-content">
              <p style={{marginBottom: 1.25 + 'em'}}>3rd-year undergraduate at UVA</p>
              <p style={{marginBottom: 1.25 + 'em'}}>Pursuing degrees in Computer Science and Computer Engineering</p>
              <p> I value enthusiasm, curiosity, persistence, and doing things the right way</p>
            </div>
            <div className="about-me-github-image">
              <a href="https://github.com/zacharyyahn">
                <img src={github} width={60} height={60}></img>
              </a>
            </div>
          <div className="about-me-linkedin-image">
            <a href="https://www.linkedin.com/in/zachary-yahn-87a431199/">
              <img src={linkedin} width={60} height={60}></img>
            </a>
          </div>
          </div>
          <div className="about-me-image"></div>

      
        </div>
        
        <div className="skills-wrapper">
          <div className="skills-border">
            <div className="skills-diagram"></div>
          </div>
        </div>
        
        <div className="projects-wrapper">
        </div>

        {/* <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
        <Tweet name="Zach" message="Grrr"/>
        <Tweet name="Peasant" message="I'm bad"/>
        <Tweet name="Test" message="123"/> */}
        </div>
      }     
    </div>
  );
}

export default App; //export the file