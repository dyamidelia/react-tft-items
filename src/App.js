import React, { Component, useState } from 'react';
import Image from './images/ComputerProgramming.jpg';
import Badge1 from './images/badges/rest-badge.png';
import Badge2 from './images/badges/angular-badge.png';
import Badge3 from './images/badges/node-badge.jpg';
import './App.css';

function Box(props){

    const [count, setCount] = useState(false);
// The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The box style
    const boxStyle = {
      "border-color": "#274160",
      "border-style": "solid",
      "border-width" : "1px",
      "border-left-style": "none",
      "border-right-style": "none",
      minHeight: 70,
      margin: '0px auto -1px auto',
      padding: 30,
      "text-align": "justify",
      "text-justify" : "inter-word",
      color: "#bac9db",
      maxWidth: 750
    };

    const buttonStyle= {
      border: "1px solid blue",
      borderRadius: 4,
      color: "blue",
      backgroundColor: "white"
    }
    // The modal "window"
    const modalStyle = {
      backgroundColor: 'red',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      "text-align": "justify",
      "text-justify" : "inter-word"
    };

    const eleVar = count ?
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
            {props.content}

          <div className="footer">
            <button onClick={() => setCount( !count )}>
              Close
            </button>
          </div>
        </div>
      </div>

      : 
      <React.Fragment> 
      <div className="box" style={boxStyle}>
      <img className="boxImage"src={Image} />
      {props.name} 
      <br/>
            <button style={buttonStyle} onClick={() => setCount( !count )}>
              Click For More Details
            </button>

            <img className="boxBadge"src={Badge1} />
            <img className="boxBadge"src={Badge2} />
            <img className="boxBadge"src={Badge3} />
      </div>
      </React.Fragment> 
    return (eleVar);
}



function App(props){

    const box1 = <Box name="Mashery"/>
    const box2 = <Box name="Learning and Development"/>
    const box3 = <Box name="Clarity"/>
    const box4 = <Box name="Business Connect"/>
    const box5 = <Box name="Innovation Labs"/>
    const box = <Box name="API Exchange"/>
         
    const element3 = <Box 

    content={ <React.Fragment> <h1>Tibco Software Inc.</h1>
                  <h2>UX  Developer</h2>
                  <h3>October 2014 – August 2018 </h3>
  
                  <p>
                         I was brought on to Tibco as a contractor for a project named API Exchange. I built a restful API using PHP, Apache, Swagger UI, and Joomla plugins. Afterwards, I was responsible for the front end using JS, AJAX, Jquery, HTML, CSS and, MVC for the presentation layer PHP, Joomla, and MYSQL for the back end. I worked on the project for  around two years and eventually lead a team of four developers. My team and I worked to allow XML/WSDL importing for customers to define their web services. The domain of the project was API management.
                  </p>


                  </React.Fragment>}/>;


    return (
      <React.Fragment>
      <div className="App">

        <div className="App-header">
        <h2>Dyami <span className="blue"> Delia  </span> - Developer </h2>
         
         <div className="App-header-nav">
          <ul>
          <li><a href="#home">Recent Projects</a></li>
          <li><a href="#news">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li ><a href="#about">About</a></li>
          </ul>
         </div>
        </div>

        <div className="App-content">
          {box}{box1}{box2}{box3}{box4}{box5}

          API Exchange

          Netclearly
          Digital Media Academy 
          Mangalam Research Center

          LinkedIn
          Resume
          Github

          {box}{box1}{box2}{box3}{box4}{box5}
          
          <table>
          </table>
          </div>
      </div>
      </React.Fragment>
    );
}

export default App;
