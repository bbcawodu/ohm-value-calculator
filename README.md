# Resistor Ohm Value Calculator Web Application

This repo serves as the code base for the Resistor Ohm Value Calculator Web Application. A live version can be viewed at:

[Resistor Ohm Value Calculator](https://resistor-ohm-calculator.herokuapp.com/)


## Installation

This is a ReactJS/NodeJS application that is hosted on Heroku. To install Heroku CLI for easier code editing and deployment, go to: [NodeJS Deployment on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction#introduction) and follow the instructions for your particular operating system.


## Application Specifications
- [Electronic color code](http://en.wikipedia.org/wiki/Electronic_color_code) is used to indicate the values or ratings of electronic components, very commonly for resistors. Write a class that implements the following interface. Feel free to include any supporting types as necessary.

    ```
    public interface IOhmValueCalculator
    
    {
    
       /// <summary>
    
       /// Calculates the Ohm value of a resistor based on the band colors.
    
       /// </summary>
    
       /// <param name="bandAColor">The color of the first figure of component value band.</param>
    
       /// <param name="bandBColor">The color of the second significant figure band.</param>
    
       /// <param name="bandCColor">The color of the decimal multiplier band.</param>
    
       /// <param name="bandDColor">The color of the tolerance value band.</param>
    
       int CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor);
    
    }
    ```
    
    - [OhmCalculatorClass.js](src/OhmCalculatorClass.js)

- Using your favorite unit test framework, write the unit tests you feel are necessary to adequately test the code you wrote as your answer to step one.
    - [OhmCalculatorClass.test.js](src/OhmCalculatorClass.test.js)
    - run ```npm test``` to run all application tests

- Create a .NET MVC or Reactjs web interface that will allow someone to use the calculator you created in step one.
    - [App.js](src/App.js)
    - [Resistor Ohm Value Calculator](https://resistor-ohm-calculator.herokuapp.com/)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license