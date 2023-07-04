function hasDecrementingArray(arr1) {
    for (let i=1;i<arr1.length;i++) {
        if(arr1[i] >= arr1[i-1]) {
            return false;
        }
    }
    return true;
}
console.log(hasDecrementingArray([5,4,3,2,1]));
console.log(hasDecrementingArray([1,2,3,4,5]));