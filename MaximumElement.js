// Write a program to find maximum element from a multi dimensional array
function findMaxElem(arr1) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            const newEl = findMaxElem(arr1[i]);
            if (newEl > max) {
                max = newEl
            }
        }
        else {
            if (arr1[i] > max) {
                max = arr1[i];
            }
        }
    }
    return max;
}
console.log(findMaxElem([1, [5, [3, 9], 7], 7]));