function solve(arr) {

    let record = new Map();

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split('-');

        if (tokens.length === 1) {
            let toRegister = tokens[0];
            if (!record.has(toRegister)) {
                record.set(toRegister, {subscriberOf: [], subscribers: []});
            }
        } else if (tokens.length === 2) {
            let [subscriberOf, someone] = tokens;

            if (record.has(subscriberOf) && record.has(someone)){
                record.get(someone).subscribers.push(subscriberOf);
                record.get(subscriberOf).subscriberOf.push(someone);
            }
        }
    }

    record = [...record].sort((a, b) => {
        if (b[1].subscribers.length < a[1].subscribers.length) return -1;
        if (b[1].subscribers.length > a[1].subscribers.length) return 1;
        if (b[1].subscriberOf.length < a[1].subscriberOf.length) return -1;
        if (b[1].subscriberOf.length > a[1].subscriberOf.length) return 1;
    });

    for (let [person, data] of record) {
        console.log(person);

        let count = 1;
        for (let subs of data.subscribers) {
            console.log(`${count}. ${subs}`);
            count++;
        }
        return;
    }
}

solve([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J',
    'C-P',
    'J-R'
]);

/*
AUTHOR solution

function main(input) {
    let log = new Map();
    let subscriptions = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split("-");

        if (currentCommand.length === 2) {
            if(log.has(currentCommand[0]) && log.has(currentCommand[1])) {
                log.get(currentCommand[1]).add(currentCommand[0]);
                subscriptions.get(currentCommand[0]).add(currentCommand[1]);
            }
        } else {
            if(!log.has(currentCommand[0])) {
                log.set(currentCommand[0], new Set());
                subscriptions.set(currentCommand[0], new Set());
            }
        }
    }

    var sortedLog = new Map([...log.entries()].sort(function(firstEntry, secondEntry) {
        let firstEntryName = firstEntry[0];
        let firstEntrySubscribers = firstEntry[1].size;

        let secondEntryName = secondEntry[0];
        let secondEntrySubscribers = secondEntry[1].size;

        let result = secondEntrySubscribers - firstEntrySubscribers;

        if(result == 0) {
            let firstEntrySubscriptions = subscriptions.get(firstEntryName).size;
            let secondEntrySubscriptions = subscriptions.get(secondEntryName).size;

            result = secondEntrySubscriptions - firstEntrySubscriptions;
        }

        return result;
    }));

    let mostImportantPerson = [...sortedLog.entries()][0];
    console.log(mostImportantPerson[0]);

    let count = 1;
    mostImportantPerson[1].forEach(function(e){
        console.log(count + ". " + e);
        count++;
    });
}


 */