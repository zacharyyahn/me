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
        <PropagateLoader color={"#4D62B6"} loading={loading} size={15} />
        </div>
        :
      <div className="app-wrapper">
        {/* Fonts */}
        <link href="http://fonts.cdnfonts.com/css/hallo-sans" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/comic-zine" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/kitchen-police" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/major-mono-display-2" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/hand-of-sean" rel="stylesheet"></link>
          
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
              <p style={{marginBottom: 1.25 + 'em'}}>3rd-year undergraduate at the <br></br>University of Virginia.</p>
              <p style={{marginBottom: 1.25 + 'em'}}>Pursuing degrees in Computer Science and Computer Engineering</p>
              <p> I value enthusiasm, curiosity, persistence, and doing things the right way.</p>
            </div>
            <div className="about-me-github-image">
              <a href="https://github.com/zacharyyahn" target="_blank" rel="noreferrer">
                <img src={github} width={60} height={60}></img>
              </a>
            </div>
          <div className="about-me-linkedin-image">
            <a href="https://www.linkedin.com/in/zachary-yahn-87a431199/" target="_blank" rel="noreferrer">
              <img src={linkedin} width={60} height={60}></img>
            </a>
          </div>
          </div>
          <div className="about-me-image"></div>

      
        </div>
        
        <div className="skills-wrapper">
          <div className="skills-border">
          <div className="skills-title">
            <h2>Technical Skills</h2>
          </div>
          
            <div className="skills-diagram"></div>
          </div>
        </div>
        
        <div className="projects-wrapper">
          <div className="projects-title">
            <div className="title-divider">
              <h2>
                <font size="+6" color="white">projects</font>
              </h2>
            </div>
          </div>
          <div className="project-item-1">
            <div className="overlay">
              <div className="overlay-text"><b>Campus Map Website</b></div>
                <div className="overlay-body">Worked with a team of peers to create a website <br></br> for new UVA students using Django and Bootstrap.
                <br></br>Visit it <a href="https://campusmapa-02.herokuapp.com/" target="_blank" rel="noreferrer">here.</a> (Loading may take a moment)
                </div>
            </div>
          </div>
          <div className="project-item-2">
            <div className="overlay">
              <div className="overlay-text"><b>Combating Deepfakes</b></div>
              <div className="overlay-body">Won first place in the national iDISPLA Adversarial AI/ML <br></br> Challenge for a novel blockchain-based solution to deepfakes. <br></br>Recognized by UVA Today, Virginia Public Radio, and NBC-29. </div>
            </div>
          </div>
          <div className="project-item-3">
            <div className="overlay">
              <div className="overlay-text"><b>Personal EKG</b></div>
              <div className="overlay-body">Designed, modeled, and tested an EKG printed circuit board. <br></br>
              Practiced signal processing, filter design, and CAD.</div>
            </div>
          </div>
          <div className="project-item-4">
            <div className="overlay">
              <div className="overlay-text"><b>Line Following Robot</b></div>
              <div className="overlay-body">Wrote embedded C code to interface with multiple sensors <br></br>
              on an MSP432-powered robot. Practiced software concepts <br></br> like finite state machines and register level logic.</div>
            </div>
          </div>
          <div className="project-item-5">
            <div className="overlay">
              <div className="overlay-text"><b>NASA BIG Idea Challenge</b></div>
              <div className="overlay-body">Submitted a $134,000 proposal to NASA for a novel <br></br> silver nanowire thin-film solution to lunar <br></br> 
              dust buildup as UVA's team co-lead for the challenge.</div>
            </div>
          </div>
          <div className="project-item-6">
            <div className="overlay">
              <div className="overlay-text"><b>Nanodrone Swarms</b></div>
              <div className="overlay-body">Researching sparse multi-SLAM algorithms for swarms <br></br> of nano-drones as a member of the UVA ShiftLab. <br></br> 
              Pursuing a publication in ICRA this coming Fall.</div>
            </div></div>
        </div>

        <div className="experience-wrapper">
          <div className="experience-title">
            <div className="title-divider">
              <h2>
                <font size="+6" color="white">work experience</font>
              </h2>
            </div>
          </div>
          <div className="experience-1">
            <div>
              <h2>NSF REU Engineering Research Fellow</h2>
              <h3>Duke University Pratt School of Engineering  |  May 2021 - Present</h3>
              <p>&#8226; One of two undergraduates selected to conduct research with the Humans and Autonomy Lab 
                under Dr. Missy Cummings. </p>
              <p>&#8226; Working with a partner to create a machine learning model capable of classifying injuries
                onboard U.S. Navy Aircraft Carriers. </p>
              <p>&#8226; Responsibilities include extensive data cleaning, programming
                scripts in Python, and building the model. </p>
            </div>
          </div>
          <div className="experience-2">
            <div>
              <h2>Deep Learning Research Intern</h2>
              <h3>University of Michigan School of Information  |  May 2021 - Present</h3>
              <p>&#8226; Part of a large research group dedicated to creating an online deep learning education platform called 1Cademy</p>
              <p>&#8226; Responsible for weekly readings and research on various deep learning topics included optimization, regularization <br></br>
              convolutional neural networks, and recurrent neural networks. Research is presented to the group each week.</p>
            </div>
          </div>
          <div className="experience-3">
            <div>
              <h2>Undergraduate Research Assistant</h2>
              <h3>Duke University Humans and Autonomy Lab | May 2021 - Present</h3>
              <p>&#8226; Exploring computer vision research and the effects of mislabeling data in autonomous vehicle training datasets.</p>
              <p>&#8226; Responsibilities include researching datasets, experimental design, and presenting to the research group.</p>
            </div>
          </div>
          <div className="experience-4">
            <div>
              <h2>Undergraduate Teaching Assistant</h2>
              <h3>University of Virginia | January 2021 - Present</h3>
              <p>&#8226; Supporting a class of over 500 students about data structures and algorithms in CS 2150: Program and Data Representation.</p>
              <p>&#8226; Responsibilities include moderating weekly lab sessions and holding weekly office hours. Course topics include trees,<br></br>  stacks, queues, 
              graphs, heaps, and programming in C, C++, Assembly, and Machine Code. </p>
            </div>
          </div>
          <div className="experience-5">
            <div>
              <h2>Undergraduate Research Assistant</h2>
              <h3>University of Virginia ShiftLab | June 2020 - Present</h3>
              <p>&#8226; Member of a research group directed by Dr. Samira Khan focused on developing high-speed in-memory computer <br></br> architectures. Attended weekly lab meetings
              and reading groups.</p>
              <p>&#8226; Conducted a project working on simulating nano-drone compute usage using Unity and Bitcraze Crazyflies.</p>
              <p>&#8226; Currently working on developing sparse multi-SLAM methods for a swarm of nano-drones using ROS and C++.</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-text">
            This website was created by Zachary Yahn, 2021. <br></br> Contact Me: zry2yz@virginia.edu
            </div>
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