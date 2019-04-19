function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
// Difference between never and void
// The void type can have undefined or null as a value where as never cannot have any value.
var something1 = null;
// let nothing: never = null;
