// consider the array accounts = [[1,2,3], [1,2,1]]; 
//    row is user and column is bank balance find user with max balance 
//    input : [[1,2,3], [1,2,1]] 
//    output : 6
function maxBalance(arr1) {
    let max = -Infinity;
    for (let i=0; i< arr1.length; i++) {
        const nestedArr = arr1[i];
        let sum = 0;
        for (let j=0; j< nestedArr.length; j++) {
            sum += nestedArr[j];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}
console.log(maxBalance([[1,2,3], [4,5,6], [7,8,9]]));