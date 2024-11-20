function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                result[i] = arr[j];
                break;
            }
        }
    }
    return result;
}

const inputArray = [13, 7, 6, 12];
const outputArray = nextGreaterElement(inputArray);
console.log(outputArray);