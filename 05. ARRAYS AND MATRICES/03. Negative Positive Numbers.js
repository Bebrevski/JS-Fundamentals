function solve(arr) {
    let newArr = [];

    arr.forEach(e => {
        if (e < 0){
            newArr.unshift(e);
        }else {
            newArr.push(e)
        }
    });

    console.log(newArr.join('\n'));
}

solve([7, -2, 8, 9]);