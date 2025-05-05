// Anagram Pallindrome program
const isPalindromeOfAnagram = str => {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}
console.log(isPalindromeOfAnagram('neveroddoreven'));