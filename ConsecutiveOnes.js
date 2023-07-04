// Write a program to count consecutive 1's in an array
function consecutiveOne(arr1) {
    let maxCount = 0;
    let currentCount = 0;
    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] == 1) {
            currentCount++;
        }
        else {
            currentCount = 0;
        }
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
    }
    return maxCount;
}

console.log(consecutiveOne([1,0,0,1,1,1,0,0,1,0,1,1,0,0,1]))