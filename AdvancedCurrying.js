function currying(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            }
        }
    }
}
function add(a, b, c) {
    return a + b + c;
}

const curryingAdd = currying(add);

console.log(curryingAdd(1)(2)(3));
console.log(curryingAdd(1, 2)(3));
console.log(curryingAdd(1)(2, 3));
console.log(curryingAdd(1, 2, 3));