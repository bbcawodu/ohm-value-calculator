import {digit_codes, multiplier_codes, tolerance_codes} from './constants';


function OhmValueCalculator(bandAColor=undefined, bandBColor=undefined, bandCColor=undefined, bandDColor=undefined){
    this.bandADomain = digit_codes;
    this.bandBDomain = digit_codes;
    this.bandCDomain = multiplier_codes;
    this.bandDDomain = tolerance_codes;

    validateBandAColor(bandAColor, this.bandADomain);
    this.bandAColor = bandAColor;

    validateBandBColor(bandBColor, this.bandBDomain);
    this.bandBColor = bandBColor;

    validateBandCColor(bandCColor, this.bandCDomain);
    this.bandCColor = bandCColor;

    validateBandDColor(bandDColor, this.bandDDomain);
    this.bandDColor = bandDColor;
}
OhmValueCalculator.prototype.calculateOhmValue = function (bandAColor=undefined, bandBColor=undefined, bandCColor=undefined, bandDColor=undefined){
    if (bandAColor !== undefined) {this.bandAColor = bandAColor;}
    if (bandBColor !== undefined) {this.bandBColor = bandBColor;}
    if (bandCColor !== undefined) {this.bandCColor = bandCColor;}
    if (bandDColor !== undefined) {this.bandDColor = bandDColor;}

    validateBandAColor(this.bandAColor, this.bandADomain);
    if (!this.bandAColor) {throw new Error("No bandAColor present as parameter or instance attribute, can not calculate resistance.");}

    validateBandBColor(this.bandBColor, this.bandBDomain);
    if (!this.bandBColor) {throw new Error("No bandBColor present as parameter or instance attribute, can not calculate resistance.");}

    validateBandCColor(this.bandCColor, this.bandCDomain);
    if (!this.bandCColor) {throw new Error("No bandCColor present as parameter or instance attribute, can not calculate resistance.");}

    validateBandDColor(this.bandDColor, this.bandDDomain);
    if (typeof this.bandDColor === "undefined") {throw new Error("bandDColor is undefined as parameter or instance attribute, can not calculate resistance.");}

    let resistance_value = (
        (this.bandADomain[this.bandAColor.toLowerCase()]*10 + this.bandBDomain[this.bandBColor.toLowerCase()]) *
        Math.pow(10, this.bandCDomain[this.bandCColor.toLowerCase()])
    );

    let dColor;
    if (this.bandDColor) {dColor = this.bandDColor.toLowerCase();}
    else {dColor = this.bandDColor;}
    let tolerance_value = this.bandDDomain[dColor];
    return(
        {
            'resistance_value': Number(resistance_value.toFixed(8)),
            'tolerance_value': tolerance_value
        }
    );
};


function validateBandAColor(bandAColor, bandADomain){
    if (bandAColor !== undefined && typeof bandAColor !== "string") {throw new Error("bandAColor is not a string");}
    if (bandAColor) {bandAColor = bandAColor.toLowerCase();}
    if (bandAColor && !(bandAColor in bandADomain)) {throw new Error("bandAColor is not a valid color choice");}
}


function validateBandBColor(bandBColor, bandBDomain){
    if (bandBColor !== undefined && typeof bandBColor !== "string") {throw new Error("bandBColor is not a string");}
    if (bandBColor) {bandBColor = bandBColor.toLowerCase();}
    if (bandBColor && !(bandBColor in bandBDomain)) {throw new Error("bandBColor is not a valid color choice");}
}


function validateBandCColor(bandCColor, bandCDomain){
    if (bandCColor !== undefined && typeof bandCColor !== "string") {throw new Error("bandCColor is not a string");}
    if (bandCColor) {bandCColor = bandCColor.toLowerCase();}
    if (bandCColor && !(bandCColor in bandCDomain)) {throw new Error("bandCColor is not a valid color choice");}
}


function validateBandDColor(bandDColor, bandDDomain){
    if (bandDColor !== undefined && bandDColor !== null && typeof bandDColor !== "string") {throw new Error("bandDColor is not a string");}
    if (bandDColor) {bandDColor = bandDColor.toLowerCase();}
    if (bandDColor && !(bandDColor in bandDDomain)) {throw new Error("bandDColor is not a valid color choice");}
}

export default OhmValueCalculator;