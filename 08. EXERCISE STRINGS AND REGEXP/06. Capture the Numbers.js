function solve(arr) {
    let pattern = /\d+/gm;

    let result = [];

    for (let line of arr) {
        let match = line.match(pattern);

        for (let num of match) {
            result.push(num);
        }
    }

    console.log(result.join(' '));
}

solve(['123a456', '789b987', '654c321', '0']);