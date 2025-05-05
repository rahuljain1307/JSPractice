// Write a program to check if two strings are anagram of each other or not
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2));