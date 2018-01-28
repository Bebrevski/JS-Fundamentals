function solve(arr) {
    let sequence = arr.map(Number);

    let firstValidNum = undefined;
    let record = [];
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= 0 && sequence[i] < 10) {
            firstValidNum = sequence[i];
        } else if (firstValidNum === undefined){
          continue;
        }

        let iterations = Math.min(firstValidNum, sequence.length - 1 - i);

        let result = 1;
        for (let j = 0; j < iterations; j++) {
            result *= sequence[j + i + 1];
        }
        record.push(result);
        firstValidNum = undefined;
    }

    let output = Math.max.apply(Math, record);

    console.log(output);
}

solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);