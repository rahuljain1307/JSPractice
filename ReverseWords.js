function reverseWords(str) {
     return str.split(" ").map( (word) => {
        return word.split("").reverse().join("")
     }).join(" ");
}
console.log(reverseWords("I am the good boy"));