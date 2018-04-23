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
      let resistance_message;
      if (this.state.current_resistance !== null) {
          let resistance_string = "Resistance of Resistor is " +
              this.state.current_resistance.resistance_value;
          if (this.state.current_resistance.tolerance_value) {
              resistance_string +=
              " +-" +
              this.state.current_resistance.tolerance_value +
              "% ohms, or between " +
              Number((this.state.current_resistance.resistance_value - this.state.current_resistance.resistance_value*this.state.current_resistance.tolerance_value*.01).toFixed(8)) +
              " and " +
              Number((this.state.current_resistance.resistance_value + this.state.current_resistance.resistance_value*this.state.current_resistance.tolerance_value*.01).toFixed(8)) +
              " ohms.";
          }
          else {
              resistance_string += " ohms";
          }

          resistance_message = <div className="Resistance-message">{resistance_string}</div>;
      }
      else if (this.state.err_message !== null) {resistance_message = <div className="Error-message">{this.state.err_message}</div>;}
      else  {resistance_message = null;}

      let bandAColor = {"backgroundColor": "transparent"};
      if (this.state.bandAColor !== "None") {bandAColor["backgroundColor"] = this.state.bandAColor;}

      let bandBColor = {"backgroundColor": "transparent"};
      if (this.state.bandBColor !== "None") {bandBColor["backgroundColor"] = this.state.bandBColor;}

      let bandCColor = {"backgroundColor": "transparent"};
      if (this.state.bandCColor !== "None") {bandCColor["backgroundColor"] = this.state.bandCColor;}

      let bandDColor = {"backgroundColor": "transparent"};
      if (this.state.bandDColor !== "") {bandDColor["backgroundColor"] = this.state.bandDColor;}

        return (
          <div className="App">
            <header className="App-header">
                <h1 className="App-title">Resistor Ohms(Resistance) Calculator</h1>
            </header>
            <div className="resistor_pic_container">
                <img src={resistor_pic} className="resistor_pic" alt="resistor_pic" />
                <div className="band-container">
                    <div className="bandADiv" style={bandAColor}></div>
                    <div className="bandBDiv" style={bandBColor}></div>
                    <div className="bandCDiv" style={bandCColor}></div>
                    <div className="bandDDiv" style={bandDColor}></div>
                </div>

            </div>
            <div className="optionsContainer">
                <select value={this.state.bandAColor} onChange={(e) => this.handle_bandA_change(e)} className="bandButton">
                    {
                        bandAColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <select value={this.state.bandBColor} onChange={(e) => this.handle_bandB_change(e)} className="bandButton">
                    {
                        bandBColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <select value={this.state.bandCColor} onChange={(e) => this.handle_bandC_change(e)} className="bandButton">
                    {
                        bandCColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <select value={this.state.bandDColor} onChange={(e) => this.handle_bandD_change(e)} className="bandButton">
                    {
                        bandDColors.map(
                            color => <option value={color} key={color}>{color}</option>
                        )
                    }
                </select>
                <br></br>
                <div className="bandLabelA">Band A</div>
                <div className="bandLabelB">Band B</div>
                <div className="bandLabelC">Band C</div>
                <div className="bandLabelD">Band D</div>
            <br></br>
            <div className="Calculator-instructions">
              First, please choose colors for the all the resistor bands.
            </div>
              <button onClick={() => this.calculate_resistance()}>Calculate Resistance</button>
              <br></br>
              {resistance_message}
            </div>
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
                err_message: err.message,
                current_resistance: null
            }
        )
    }
  }
}

export default App;
