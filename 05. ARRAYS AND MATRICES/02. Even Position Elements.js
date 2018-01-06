function solve(arr) {
    let newArr = arr.filter((e, i) => i % 2 === 0).join(' ');

    console.log(newArr);
}

solve(['20', '30', '40']);