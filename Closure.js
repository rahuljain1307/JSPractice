function closure(name) {
    return function (greeting) {
        console.log(`${greeting} ${name}`);
    }
}

var callClosure = closure('Rahul');
callClosure('Welcome');
callClosure('Hello');