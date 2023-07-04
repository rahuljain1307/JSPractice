// Write a program to check if string is pallindrome or not
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - i - 1]) {
            return 'Not palindrome';
        }
    }
    return 'Palindrome';
}
console.log(checkPalindrome('radar'))