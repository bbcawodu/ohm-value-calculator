import React, { Component } from 'react';
import resistor_pic from './transparent_resistor.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Resistor Ohm Calculator</h1>
          <img src={resistor_pic} className="resistor_pic" alt="resistor_pic" />
        </header>
        <p className="App-intro">
          First, please choose colors for the all the resistor bands.
        </p>
      </div>
    );
  }
}

export default App;
