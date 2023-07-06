// Write a program to find all the prime factors of a number
function findPrimeFactors(n) {
    const output = [];
     while(n%2==0) {
        output.push(2);
        n /= 2;
     }
     for (let i=3; i*i <= n; i+=2) {
        while(n%i==0) {
            output.push(i);
            n /= i;
         }
     }
     if (n > 1) {
        output.push(n);
     }
     return output
}
console.log(findPrimeFactors(99990));