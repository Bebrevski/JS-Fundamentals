function solve(input1, input2) {
    let map = [];

    for (let array of input1) {
        map.push(array.split(' ').map(Number));
    }

    for (let i = 0; i < input2.length; i++) {
        let [force, index] = input2[i].split(' ');
        index = Number(index);

        if (force === 'breeze') {
            for (let col = 0; col < map[index].length; col++) {
                map[index][col] = Math.max(0, map[index][col] - 15);
            }
        } else if (force === 'gale') {
            for (let row = 0; row < map.length; row++) {
                map[row][index] = Math.max(0, map[row][index] - 20);
            }
        } else if (force === 'smog') {
            let value = index;

            for (let row = 0; row < map.length; row++) {
                for (let col = 0; col < map[row].length; col++) {
                    map[row][col] += value;
                }
            }
        }
    }

    let output = [];
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] >= 50){
                output.push(`[${row}-${col}]`);
            }
        }
    }

    if (output.length === 0){
      console.log('No polluted areas');
      return;
    }else {
      console.log(`Polluted areas: ${output.join(', ')}`);
    }
}

solve(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
/*
solve(
    [
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);

solve(
    [
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);
*/