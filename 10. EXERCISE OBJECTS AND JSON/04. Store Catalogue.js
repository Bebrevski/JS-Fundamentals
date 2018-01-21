function solve(arr) {

    let record = new Map();

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let letter = product[0];

        if (!record.has(letter)) {
            record.set(letter, new Map());
        }

        if (!record.get(letter).has(product)) {
            record.get(letter).set(product, 0);
        }

        record.get(letter).set(product, price);
    }

    record = [...record].sort();

    for (let [letter, products] of record) {
        console.log(`${letter}`);

        products = [...products].sort((a, b) => a[0].localeCompare(b[0]));

        for (let [product, price] of products) {
            console.log(` ${product}: ${price}`);
        }
    }
}

solve([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);