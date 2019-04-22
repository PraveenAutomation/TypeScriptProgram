function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "Steve", "Bill")); 

Greet("Hello");