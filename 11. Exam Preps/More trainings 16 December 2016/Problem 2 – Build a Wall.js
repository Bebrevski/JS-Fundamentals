function solve(array) {
    let record = [];
    let count = 1;
    while (count > 0) {
        count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 30) continue;

            array[i]++;
            count++
        }
        if (count === 0) continue;
        record.push(count * 195);
    }

    console.log(record.join(', '));
    let totalConcrete = record.reduce((a, b) => a + b);
    console.log(`${totalConcrete * 1900} pesos`);
}

solve([17]);
solve([21, 25, 28]);