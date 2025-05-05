var promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('one'), 100);
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('two'), 500);
});

Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});