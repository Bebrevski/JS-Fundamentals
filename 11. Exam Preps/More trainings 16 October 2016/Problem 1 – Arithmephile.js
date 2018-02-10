function solve(input) {
    input = input.map(Number);
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i];
        if (currentNum >= 0 && currentNum <= 9) {
            let sum = 1;
            for (let j = 0; j < Math.min(currentNum, input.length - 1); j++) {
                sum *= input[i + j + 1];
            }

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    console.log(maxSum.toString());
}

solve([
    '18',
    '42',
    '19',
    '36',
    '1',
    '-297',
    '38',
    '100',
    '9',
    '-249',
    '-170',
    '-18',
    '-208',
    '-11',
    '-87',
    '-90',
    '-286',
    '-27'
]);
