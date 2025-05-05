let promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, 2000)
});

promise.then(value => {
    console.log(value);
    return value * 2;
})
    .then(value => {
        console.log(value);
        return value * 3;
    })
    .then(value => {
        console.log(value);
        return value * 4;
    })
    .then(value => {
        console.log(value);
        return value * 5;
    })