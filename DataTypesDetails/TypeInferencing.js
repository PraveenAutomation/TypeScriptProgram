// TypeScript infers types of variables when there is no explicit information available in the form of type annotations
var str = 'Praveen';
var myName = str;
var id = str;
id = 10;
console.log(myName);
console.log(id);
var arr = [0, 1, "test"];
arr.push("str");
console.log(arr);
// arr.push(true)
// Function level: The return type of a function is also inferred by the returning value.
function sum(a, b) {
    return a + b;
}
var total = sum(10, 20);
console.log(total);
// var str: string = sum(10,20); 
