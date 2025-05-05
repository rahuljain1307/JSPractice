const memoizeAdd = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log('Fetching from cache');
            return cache[value];
        }
        else {
            console.log('Computing');
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    }
}

let addition = memoizeAdd();
console.log(addition(20));
console.log(addition(20));