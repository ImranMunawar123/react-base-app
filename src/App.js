import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Automation has been implemented in React App
        </p>
        <p 
        style={{fontSize: "15px"}}
        >
        <span>By: </span> 
        <a
          className="App-link"
          href="https://pk.linkedin.com/in/imran-munawar-09aa83118"
          target="_blank"
          rel="noopener noreferrer"
        >
           Imran Munawar
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
