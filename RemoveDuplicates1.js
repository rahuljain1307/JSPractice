// Remove duplicates without using a new array
function removeDuplicates(arr1) {
    for (let i=0;i<arr1.length;i++) {
        for (let j=i+1; j<arr1.length; j++) {
            console.log(j);
            if (arr1[i] == arr1[j]) {
                arr1.splice(j, 1);
                j--;
            }
        }
    }
    return arr1;
}

console.log(removeDuplicates([1,2,3,1,1,1,4,5,6,7,7,8,9]));