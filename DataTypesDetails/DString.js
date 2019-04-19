// TypeScript has included support for ES6 Template strings. 
var employeeName = "John Smith";
var employeeDept = 'Finance';
// Pre-ES6 
var employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6 
var employeeDesc2 = employeeName + " works in the " + employeeDept + " department.";
console.log(employeeDesc1); //John Smith works in the Finance department. 
console.log(employeeDesc2); //John Smith works in the Finance department. 
// Various methods of String -will discuss some of them:
// chatAt()-returns a character at the specified index from a string.
var str = 'Hello TypeScript';
console.log(str.charAt(0)); // returns 'H'
console.log(str.charAt(2)); // returns 'l'
console.log("Hello World".charAt(2)); // returns 'l'
