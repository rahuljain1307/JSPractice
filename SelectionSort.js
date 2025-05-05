function selectionSort(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[j] < arr1[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr1[i];
            arr1[i] = arr1[min];
            arr1[min] = temp;
        }
    }
    return arr1;
}
console.log(selectionSort([3, 4, 1, 7, 8, 2, 9]));