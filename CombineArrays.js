function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort();
}
console.log(combineArrays([1, 2, 3, 4], [2, 5, 6, 8]));