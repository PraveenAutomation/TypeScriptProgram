// TypeScript supports number data type. All numbers are stored as floating point numbers.
// These numbers can be Decimal (base 10), Hexadecimal (base 16) or Octal (base 8).
var first1 = 123; // number 
var second1 = 0x37CF; // hexadecimal
var third1 = 255; // octal
var fourth1 = 57; // binary  
console.log(first1); // 123 
console.log(second1); // 14287
console.log(third1); // 255
console.log(fourth1); // 57 
// valueOf()-returns the primitive value of the number.
// This function returns the primitive value of the Object being called on.
var num = new Number(123);
console.log(num); //Output: a number object with value 123
console.log(num.valueOf()); //Output: 123
console.log(typeof num); //Output: object
var num2 = num.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2); //Output: number
