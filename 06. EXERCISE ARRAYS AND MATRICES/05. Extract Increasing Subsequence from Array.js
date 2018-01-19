function a(input) {
    input = input.map(Number);
    let arr = [];
    let biggest;
    input.forEach(function (e) {
        if (biggest !== undefined) {
            if (e >= biggest) {
                arr.push(e);
                biggest = e;
            }
        }
        else {
            biggest = e;
            arr.push(e);
        }
    });
    arr.forEach(e => console.log(e));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);