// sum of numbers in between string
// input: “add123456with376765willgive887686”
// expected output: 1387907
function sumOfNumbers(str1) {
    const numbers = str1.match(/\d+/g);
    if (numbers === null) {
        return 0;
    }
    const sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
    return sum;
}
console.log(sumOfNumbers("add123456with376765willgive887686"));