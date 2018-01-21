function solve(arr) {
    let record = new Set();

    for (let username of arr) {
        record.add(username);
    }

    record = [...record].sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
    });

    record.forEach(u => console.log(u));
}

solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);