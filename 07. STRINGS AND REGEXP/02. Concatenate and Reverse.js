function solve(arr) {

    let result = Array.from(arr.join('')).reverse().join('');

    console.log(result);
}

solve(['I', 'am', 'student']);
solve(['race', 'car']);