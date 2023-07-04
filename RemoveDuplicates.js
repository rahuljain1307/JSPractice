function removeDuplicates(arr1) {
    const uniqueArr = [...new Set(arr1)]
    return uniqueArr;
}

console.log(removeDuplicates([1,1,3,2,4,5,6,2,3,8,8]));