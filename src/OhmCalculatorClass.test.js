import OhmValueCalculator from './OhmCalculatorClass';
import React from 'react';
import {bandAColors, bandBColors, bandCColors, bandDColors} from './constants';


let invalidColors = [
    'these',
    'are',
    'invalid',
    'strings'
];

let invalidInputs = [
    34,
    16,
    true,
    false,
    {}
];


describe('OhmValueCalculator class tests.', () => {
    describe('Constructor tests.', () => {
        it('Test constructor with a bandAColor of all possible valid values.', () => {
            bandAColors.forEach(function(color) {
                if (color !== "None") {
                    let oCalculator = new OhmValueCalculator(color);
                    expect(oCalculator.bandAColor).toBe(color);
                }
            });
        });
        it('Test throw exception on constructor with invalid bandAColors.', () => {
            invalidColors.forEach(function(color) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(color);}
                ).toThrow(new Error("bandAColor is not a valid color choice"));
            });

            invalidInputs.forEach(function(input) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(input);}
                ).toThrow(new Error("bandAColor is not a string"));
            });
        });

        it('Test constructor with a bandBColor of all possible valid values.', () => {
            bandBColors.forEach(function(color) {
                if (color !== "None") {
                    let oCalculator = new OhmValueCalculator(undefined, color);
                    expect(oCalculator.bandBColor).toBe(color);
                }
            });
        });
        it('Test throw exception on constructor with invalid bandBColors.', () => {
            invalidColors.forEach(function(color) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(undefined, color);}
                ).toThrow(new Error("bandBColor is not a valid color choice"));
            });

            invalidInputs.forEach(function(input) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(undefined, input);}
                ).toThrow(new Error("bandBColor is not a string"));
            });
        });

        it('Test constructor with a bandCColor of all possible valid values.', () => {
            bandCColors.forEach(function(color) {
                if (color !== "None") {
                    let oCalculator = new OhmValueCalculator(undefined, undefined, color);
                    expect(oCalculator.bandCColor).toBe(color);
                }
            });
        });
        it('Test throw exception on constructor with invalid bandCColors.', () => {
            invalidColors.forEach(function(color) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(undefined, undefined, color);}
                ).toThrow(new Error("bandCColor is not a valid color choice"));
            });

            invalidInputs.forEach(function(input) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(undefined, undefined, input);}
                ).toThrow(new Error("bandCColor is not a string"));
            });
        });

        it('Test constructor with a bandDColor of all possible valid values.', () => {
            bandDColors.forEach(function(color) {
                let oCalculator = new OhmValueCalculator(undefined, undefined, undefined, color);
                expect(oCalculator.bandDColor).toBe(color);
            });
        });
        it('Test throw exception on constructor with invalid bandDColors.', () => {
            invalidColors.forEach(function(color) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(undefined, undefined, undefined, color);}
                ).toThrow(new Error("bandDColor is not a valid color choice"));
            });

            invalidInputs.forEach(function(input) {
                expect(
                    () => {let oCalculator = new OhmValueCalculator(undefined, undefined, undefined, input);}
                ).toThrow(new Error("bandDColor is not a string"));
            });
        });
    });

    describe('calculateOhmValue method tests.', () => {
        it('Test using method with some possible valid values.', () => {
            let oCalculator = new OhmValueCalculator();
            let resistance = oCalculator.calculateOhmValue('yellow', 'violet', 'red', 'gold');
            expect(resistance.resistance_value).toBe(4700);
            expect(resistance.tolerance_value).toBe(5);

            resistance = oCalculator.calculateOhmValue('black', 'brown', 'green', 'gray');
            expect(resistance.resistance_value).toBe(100000);
            expect(resistance.tolerance_value).toBe(.05);

            resistance = oCalculator.calculateOhmValue('orange', 'yellow', 'gray', 'yellow');
            expect(resistance.resistance_value).toBe(3400000000);
            expect(resistance.tolerance_value).toBe(5);

            resistance = oCalculator.calculateOhmValue('blue', 'orange', 'pink', 'red');
            expect(resistance.resistance_value).toBe(.063);
            expect(resistance.tolerance_value).toBe(2);

            resistance = oCalculator.calculateOhmValue('brown', 'green', 'silver', 'brown');
            expect(resistance.resistance_value).toBe(.15);
            expect(resistance.tolerance_value).toBe(1);

            resistance = oCalculator.calculateOhmValue('red', 'blue', 'pink', null);
            expect(resistance.resistance_value).toBe(.026);
            expect(resistance.tolerance_value).toBe(20);
        });

        it('Test throw exception on method with some possible invalid values.', () => {
            let oCalculator = new OhmValueCalculator();
            let resistance;

            expect(
                () => {resistance = oCalculator.calculateOhmValue(421, 'violet', 'red', 'gold');}
            ).toThrow(new Error("bandAColor is not a string"));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue(undefined, 'violet', 'red', 'gold');}
            ).toThrow(new Error("No bandAColor present as parameter or instance attribute, can not calculate resistance."));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('candy', 'violet', 'red', 'gold');}
            ).toThrow(new Error("bandAColor is not a valid color choice"));

            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', false, 'red', 'gold');}
            ).toThrow(new Error("bandBColor is not a string"));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', undefined, 'red', 'gold');}
            ).toThrow(new Error("No bandBColor present as parameter or instance attribute, can not calculate resistance."));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'dlkjflkdsf', 'red', 'gold');}
            ).toThrow(new Error("bandBColor is not a valid color choice"));

            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'red', {}, 'gold');}
            ).toThrow(new Error("bandCColor is not a string"));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'red', undefined, 'gold');}
            ).toThrow(new Error("No bandCColor present as parameter or instance attribute, can not calculate resistance."));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'orange', 'apple sauce', 'gold');}
            ).toThrow(new Error("bandCColor is not a valid color choice"));

            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'red', 'gold', false);}
            ).toThrow(new Error("bandDColor is not a string"));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'red', 'gold', undefined);}
            ).toThrow(new Error("bandDColor is undefined as parameter or instance attribute, can not calculate resistance."));
            oCalculator = new OhmValueCalculator();
            expect(
                () => {resistance = oCalculator.calculateOhmValue('violet', 'orange', 'gold', 'surfboard');}
            ).toThrow(new Error("bandDColor is not a valid color choice"));
        });
    });
});
