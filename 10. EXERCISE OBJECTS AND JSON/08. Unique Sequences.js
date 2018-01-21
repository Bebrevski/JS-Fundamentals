function solve(arr) {

    let record = new Set();

    for (let json of arr) {
        let array = JSON.parse(json).sort((a, b) => {
            if (a < b) return 1;
            if (a > b) return -1;
        });

        let toString = JSON.stringify(array);

        record.add(toString);
    }

    record = [...record].sort((a, b) => {
        let arr1 = JSON.parse(a);
        let arr2 = JSON.parse(b);
        if (arr1.length < arr2.length) return -1;
        if (arr1.length > arr2.length) return 1;
    });

    for (let array of record) {
        let toNumbers = JSON.parse(array);

        console.log('[' + toNumbers.join(', ') + ']');
    }
}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);

solve([
    '[7.14, 7.180, 7.339, 80.0990000000000]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);

solve([
    '[7.14]'
]);