function solve(arr) {

    let record = new Map();

    for (let kvp of arr) {
        let [town, population] = kvp.split(' <-> ');

        if (!record.has(town)){
          record.set(town, 0);
        }

        record.set(town, record.get(town) + Number(population));
    }

    for (let [town, pop] of record) {
        console.log(`${town} : ${pop}`);
    }
}

solve([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000',
'Washington <-> 234',
'Las Vegas <-> 1000'
]);