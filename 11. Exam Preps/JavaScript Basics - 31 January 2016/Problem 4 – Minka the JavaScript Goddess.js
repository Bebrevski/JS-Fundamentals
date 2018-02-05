function solve(input) {

    let record = new Map();

    for (let line of input) {
        let [name, type, taskNum, score, linesOfCode] = line.split(' & ');
        score = Number(score);
        linesOfCode = Number(linesOfCode);

        if (!record.has(taskNum)) {
            record.set(taskNum, {tasks: [], average: 0, lines: 0});
        }

        let taskObj = {name: name, type: type};
        let averageOldValue = record.get(taskNum)['average'];
        let linesOldValue = record.get(taskNum)['lines'];

        record.get(taskNum)['tasks'].push(taskObj);
        record.get(taskNum)['average'] = averageOldValue + score;
        record.get(taskNum)['lines'] = linesOldValue + linesOfCode;
    }

    [...record.entries()].forEach(e => {
        e[1]['average'] = Math.round(e[1]['average'] / e[1]['tasks'].length * 100) / 100;
    });

    [...record.entries()].forEach(e => {
        e[1]['tasks'].sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name < a.name) return -1;
        });
    });

    record = [...record].sort((a, b) => {
        if (a[1]['average'] > b[1]['average']) return -1;
        if (a[1]['average'] < b[1]['average']) return 1;
        if (a[1]['lines'] > b[1]['lines']) return 1;
        if (a[1]['lines'] < b[1]['lines']) return -1;
    });

    let result = {};

    for (let [task, obj] of record) {
        result['Task ' + task] = obj;
    }
    console.log(JSON.stringify(result));
}

solve([
    'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 &  100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81',
]);