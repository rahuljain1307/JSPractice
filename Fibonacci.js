// Write a program for Fibonnaci series using Memoization
function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <=2) {
        return 1;
    }
    const fib = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    memo[n] = fib;
    return fib;
}
const n = 10;
for (let i=1; i<= n; i++) {
    console.log(fibonacci(i));
}