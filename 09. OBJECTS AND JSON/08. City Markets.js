function sales(arr) {

    let record = new Map();

    for (let line of arr) {
        let [town, product, income] = line.split(' -> ');
        income = income.split(' : ').reduce((a, b) => a * b);

        if (!record.has(town)) {
            record.set(town, new Map());
        }

        if (!record.get(town).has(product)) {
            record.get(town).set(product, 0);
        }

        let oldIncome = record.get(town).get(product);

        record.get(town).set(product, oldIncome + income);
    }

    for (let [town, products] of record) {
        console.log(`Town - ${town}`);

        for (let [product, income] of products) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

sales([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);