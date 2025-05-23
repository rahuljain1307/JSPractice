// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, an n-ary function turns into a unary function.

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1)); // returns a function: b => c =>  1 + b + c
console.log(curryUnaryFunction(1)(2)); // returns a function: c => 3 + c
console.log(curryUnaryFunction(1)(2)(3)); // returns the number 6