// Tuple - Declaration
// Tuple is a new data type which includes two set of values of different data types.
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
console.log(user)
console.log(user[4]); 

// Tuple - Array Declaration

var employee1: [number, string][];
employee1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee1)
console.log(employee1[0])

// Add Elements into Tuple
var employee2: [number, string] = [15, "Hitu"];
employee2.push(12,'Ratan', "Bhar"); 
console.log(employee2); 
console.log(employee2.length)