function solve(arr) {
    let k = arr.shift();

    console.log(arr.slice(0, k));
    console.log(arr.slice(-k));
}

solve([2, 7, 8, 9]);