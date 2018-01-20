function solve(str) {
    let words = str[0].split(/\W+/g).filter(e => e !== '').map(e => e.toLowerCase());

    let record = new Map();

    for (let word of words) {
        if (!record.has(word)) {
            record.set(word, 0);
        }

        record.set(word, record.get(word) + 1);
    }

    record = [...record.entries()].sort();
    for (let [word, count] of record) {
        console.log(`'${word}' -> ${count} times`)
    }
}

solve(['Far too slow, you\'re far too slow.']);