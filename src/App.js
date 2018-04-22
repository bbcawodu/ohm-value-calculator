import React, { Component } from 'react';
import resistor_pic from './transparent_resistor.png';
import './App.css';
import OhmValueCalculator from './OhmCalculatorClass';
import {bandAColors, bandBColors, bandCColors, bandDColors} from './constants';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ohm_calculator: new OhmValueCalculator(),
            current_resistance: null,
            err_message: null,
            bandAColor: "None",
            bandBColor: "None",
            bandCColor: "None",
            bandDColor: ""
        };
    }

    handle_bandA_change(e) {
        this.setState({bandAColor:e.target.value});
    }

    handle_bandB_change(e) {
        this.setState({bandBColor:e.target.value});
    }

    handle_bandC_change(e) {
        this.setState({bandCColor:e.target.value});
    }

    handle_bandD_change(e) {
        this.setState({bandDColor:e.target.value});
    }

  render() {
      let resistance_string;
      if (this.state.current_resistance !== null) {
          resistance_string = "" +
              this.state.current_resistance.resistance_value +
              " +-" +
              this.state.current_resistance.tolerance_value +
              "% ohms.";
      }
      else {resistance_string = null;}
        return (
          <div className="App">
            <header className="App-header">
                <h1 className="App-title">Resistor Ohms(Resistance) Calculator</h1>
            </header>
            <img src={resistor_pic} className="resistor_pic" alt="resistor_pic" />
            <div>
                <select value={this.state.bandAColor} onChange={(e) => this.handle_bandA_change(e)}>
                    {
                        bandAColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <select value={this.state.bandBColor} onChange={(e) => this.handle_bandB_change(e)}>
                    {
                        bandBColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <select value={this.state.bandCColor} onChange={(e) => this.handle_bandC_change(e)}>
                    {
                        bandCColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <select value={this.state.bandDColor} onChange={(e) => this.handle_bandD_change(e)}>
                    {
                        bandDColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
            </div>
            <p className="App-intro">
              First, please choose colors for the all the resistor bands.
            </p>
              <br></br>
              <button onClick={() => this.calculate_resistance()}>Calculate Resistance</button>
              <br></br>
              <p className="Error-message">
                  {this.state.err_message}
              </p>
              <p className="App-intro">
                  Resistance of Resistor = {resistance_string}
              </p>
          </div>
        );
  }

  calculate_resistance() {
    let bandAColor = this.state.bandAColor;
    let bandBColor = this.state.bandBColor;
    let bandCColor = this.state.bandCColor;
    let bandDColor = this.state.bandDColor;
    if (bandDColor === ""){bandDColor = null;}

    try {
        let ohm_calculator = this.state.ohm_calculator;
        let resistance = ohm_calculator.calculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor);
        this.setState(
            {
                ohm_calculator: ohm_calculator,
                err_message: null,
                current_resistance: resistance
            }
        );
    }
    catch (err) {
        this.setState(
            {
                err_message: err.message
            }
        )
    }
  }
}

export default App;
