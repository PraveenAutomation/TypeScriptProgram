function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 

function keepProcessing(): never { 
    while (true) { 
 console.log('I always does something and never ends.')
}
}

// Difference between never and void
// The void type can have undefined or null as a value where as never cannot have any value.

let something1: void = null;
// let nothing: never = null;