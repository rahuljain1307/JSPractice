const promise1 = new Promise((resolve, reject) => {
    resolve('Task 1 Completed');
})
const promise2 = new Promise((resolve, reject) => {
    resolve('Task 2 Completed');
})
const promise3 = new Promise((resolve, reject) => {
    reject('Task 3 Failed');
})

Promise.allSettled([promise1, promise2, promise3])
    .then((value) => console.log(value))