function solve(arr) {
    let newArr = arr.filter((e, i) => i % 2 !== 0).map(e => e * 2).reverse();

    console.log(newArr.join(' '));
}

solve([10, 15, 20, 25]);