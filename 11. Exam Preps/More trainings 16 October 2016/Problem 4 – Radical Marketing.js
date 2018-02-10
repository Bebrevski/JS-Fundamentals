function solve(input) {
    let record = new Map();

    for (let line of input) {
        let tokens = line.split('-');
        if (tokens.length === 1){
            let person = tokens[0];
          if (!record.has(person)){
            record.set(person, {followedBy: new Set(), following: new Set()});
          }
        }else if (tokens.length === 2){
          let wantsToFollow = tokens[0];
          let followedBy = tokens[1];

          if (record.has(wantsToFollow) && record.has(followedBy) && wantsToFollow !== followedBy){
            record.get(followedBy).followedBy.add(wantsToFollow);
            record.get(wantsToFollow).following.add(followedBy);
          }
        }
    }


record = new Map([...record].sort((a, b) => {
    if(a[1].followedBy.size > b[1].followedBy.size) return -1;
    if(a[1].followedBy.size < b[1].followedBy.size) return 1;
    if(a[1].following.size > b[1].following.size) return -1;
    if(a[1].following.size < b[1].following.size) return 1;
}));

    for (let [person, subscribers] of record) {
        console.log(person);
        let count = 1;
        for (let someone of subscribers.followedBy) {
            console.log(`${count}. ${someone}`);
            count++;
        }
        return;
    }
}

solve([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A',
    'C-B',
    'C-D',
    'B-C',
    'D-C',
    'A-C'
]);