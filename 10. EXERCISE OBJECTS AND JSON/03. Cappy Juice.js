function solve(arr) {
    let record = new Map();
    let output = new Map();

    for (let juice of arr) {
        let [fruit, quantity] = juice.split(' => ');

        quantity = Number(quantity);

        if (!record.has(fruit)) {
            record.set(fruit, 0);
        }

        let oldQuantity = record.get(fruit);

        record.set(fruit, oldQuantity + quantity);

        if (record.get(fruit) >= 1000) {
            output.set(fruit, record.get(fruit));
        }
    }

    for (let [fruit, quantity] of output) {
        console.log(`${fruit} => ${Math.floor(quantity / 1000)}`);
    }
}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);