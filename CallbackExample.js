function callbackFn(name) {
    console.log(name);
}

function outerFn(callback) {
    let name = 'Rahul';
    callback(name);
}

outerFn(callbackFn);