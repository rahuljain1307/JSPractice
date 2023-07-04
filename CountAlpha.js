// Write a program to count consonents and vowels in a string
function CountAlpha(str1) {
    let vowelCount = 0;
    let consCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr1 = str1.toLowerCase().split('');
    for (ch of arr1) {
        vowels.indexOf(ch) == -1 ? consCount++ : vowelCount++;
    }
    console.log(`Vowels Count: ${vowelCount}, Consonent Count: ${consCount}`);
}
CountAlpha('aeioudshfchwcgwvc');