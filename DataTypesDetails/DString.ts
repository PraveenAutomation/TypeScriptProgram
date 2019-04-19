
// TypeScript has included support for ES6 Template strings. 

let employeeName:string = "John Smith"; 
let employeeDept:string = 'Finance'; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 

let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 

// Various methods of String -will discuss some of them:

// chatAt()-returns a character at the specified index from a string.

let str: string = 'Hello TypeScript';
console.log(str.charAt(0)); // returns 'H'
console.log(str.charAt(2)); // returns 'l'
console.log("Hello World".charAt(2)); // returns 'l'