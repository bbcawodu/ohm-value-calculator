var digit_codes = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'gray': 8,
    'white': 9
};


var multiplier_codes = Object.assign(
    {
        'pink': -3,
        'silver': -2,
        'gold': -1
    },
    digit_codes
);


var tolerance_codes = {
    null: 20,
    'silver': 10,
    'gold': 5,
    'brown': 1,
    'red': 2,
    'yellow': 5,
    'green': .5,
    'blue': .25,
    'violet': .1,
    'gray': .05
};

var bandAColors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray',
    'white'
];

var bandBColors = bandAColors.slice();

var bandCColors = bandBColors.concat(['pink', 'silver', 'gold']);

var bandDColors = [
    null,
    'silver',
    'gold',
    'brown',
    'red',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray'
];
