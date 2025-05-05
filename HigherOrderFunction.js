// A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both. The syntactic structure of higher order function will be as follows,You can also call the function which you are passing to higher order function as callback function.

// The higher order function is helpful to write the modular and reusable code.

const firstOrderFunc = () =>
    console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);
