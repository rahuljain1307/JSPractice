// Write a program to arrange array in increasing order of p value for empty indexs add any empty object in the array
// Input [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
// Output  [{p:2},{},{p:4},{},{p:6},{},{},{p:9}] 
function arrayTransform(arr1) {
    const sortedArr = arr1.sort((a, b) => a.p - b.p);
    const max = sortedArr[sortedArr.length - 1].p;
    const min = sortedArr[0].p;
    const output = [];
    for (let i=min;i<=max;i++) {
        const obj = {};
        const data = sortedArr.find((ele) => ele.p === i);
        if (data) {
            obj.p = data.p;
        }
        output.push(obj);
    }
    return output;
}

const input = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
console.log(arrayTransform(input));