
let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

/*
for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}
*/

// Access Array Elements

let fruits1: string[] = ['Apple', 'Orange', 'Banana']; 
console.log(fruits1[0]); // returns Apple
fruits1[1]; // returns Orange
fruits1[2]; // returns Banana
fruits1[3]; // returns undefined

// Array Methods:

var fruits2: Array<string> = ['Apple', 'Orange', 'Banana']; 
fruits2.sort(); 
console.log(fruits2); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits2.pop()); //output: Orange

fruits2.push('Papaya'); 
console.log(fruits2); //output: ['Apple', 'Banana', 'Papaya']

fruits2 = fruits2.concat(['Fig', 'Mango']); 
console.log(fruits2); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

console.log(fruits2.indexOf('Papaya'));//output: 2