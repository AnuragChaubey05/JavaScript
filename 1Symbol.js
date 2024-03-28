// Symbols are mainly used as unique property keys because symbol never clashes with any other property either a symbol or a string
let symbol1 = Symbol('Symbol2')
let symbol2 = Symbol('Symbol2')
console.log(symbol1 === symbol2)
console.log(typeof symbol1)

// console.log ('symbol: ' + symbol1); TypeError: Cannot convert a Symbol value to a string
console.log ('symbol: ' + symbol1.toString());
console.log(typeof ('symbol: ' + symbol1.toString()));

// Use Case 1
const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY])

// Use case 2: constants representing concepts
const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: '+color);
    }
}

getComplement(COLOR_RED)
