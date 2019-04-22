// Named function:
function display() {
    console.log("Named Function in TS");
}
display();
// Function with Parameter and Return Types
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function getNumber() {
    return Math.random();
}
// calling
console.log("Random number: " + getNumber());
//  Anonymous Function
var greeting = function () {
    console.log("Fun without name!");
};
greeting();
//  Anonymous Function with Paramter and Return Types
var subSum = function (x, y) {
    if (x > y) {
        return x - y;
    }
    else {
        return x + y;
    }
};
console.log(subSum(5, 10));
// Optional parameter
function optionalpara(Name1, Name2, Name3, Name4) {
    return Name1 + ' ' + Name2 + ' ' + Name3 + ' ' + Name4;
}
console.log(optionalpara('Jai', 'Mata', 'Di!!'));
