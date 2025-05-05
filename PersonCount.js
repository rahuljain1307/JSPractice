// Write a program to find the count of peoples group by their countries
function PersonCount(arr1) {
    let count = {};
    for (let i = 0; i < arr1.length; i++) {
        let country = arr1[i].address.country;
        if (!count[country]) {
            count[country] = 1;
        }
        else {
            count[country]++;
        }
    }
    return count;
}
console.log(PersonCount([{ "name": 'xyz', "address": { "country": "US" } }, { "name": 'xyz', "address": { "country": "US" } }]));