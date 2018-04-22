import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OhmValueCalculator from './OhmCalculatorClass';
import registerServiceWorker from './registerServiceWorker';


var o = new OhmValueCalculator('red', 'blue', 'pink', null);
let resistance_object = o.calculateOhmValue();
console.log(
    "Resistance is: " +
    resistance_object.resistance_value +
    " +-" +
    resistance_object.tolerance_value +
    "% ohms."
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
