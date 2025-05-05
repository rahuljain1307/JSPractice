const promise = new Promise((resolve, reject) => {
    let flag = false;
    if (flag) {
        resolve('Resolved');
    }
    else {
        reject('Rejected')
    }
});

promise.then((value) => console.log(value))
    .catch((value) => console.log(value));