// Write a program to check the occurence of a character in a string
function OccurenceCount(str1, ch1) {
    return str1.split('').filter(ch => ch === ch1).length;
}
console.log(OccurenceCount('Hello', 'u'));