function solve(arr) {
    let tokens = arr[0].split(/\W+/g).filter(e => e !== '');

    let record = {};

    for (let word of tokens) {
        if (!record.hasOwnProperty(word)){
          record[word] = 0;
        }

        record[word]++;
    }

    console.log(JSON.stringify(record));
}

solve(['Far too slow, you\'re far too slow.']);