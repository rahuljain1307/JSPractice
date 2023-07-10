function combineArrays(arr1, arr2) {
    let arr3 = [];
    let m = arr1.length;
    let n = arr2.length;
    for (let i=0; i<m; i++) {
        arr3[i] = arr1[i];
    }
    for (let j=0; j<n; j++) {
        arr3[j+m] = arr2[j];
    }
    arr3.sort();
    return arr3;
}
console.log(combineArrays([1,2,3,4], [2,5,6,8]));