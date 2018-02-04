function solve(rows) {
    let coordinates = rows.pop().split(' ');
    let matrix = [];
    for (let i = 0; i < rows.length; i++) {
        matrix.push(rows[i].split(' ').map(Number));
    }

    let snowballDamage = 0;
    let targets = 0;
    for (let coor of coordinates) {
        coor = coor.split(',').map(Number);

        if (matrix[coor[0]][coor[1]] === 0) {
            continue;
        }

        snowballDamage += matrix[coor[0]][coor[1]];
        targets++;

        matrix = killNearbyBunnies(coor[0], coor[1]);

    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] !== 0 && col < matrix[row].length) {
                snowballDamage += matrix[row][col];
                matrix[row][col] = 0;
                targets++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(targets);

    function killNearbyBunnies(row, col) {
        let damage = matrix[row][col];

        for (let r = row - 1; r <= row + 1; r++) {
            if (r < 0 || r >= matrix.length) continue;
            for (let c = col - 1; c <= col + 1; c++) {
                if (c < 0 || c >= matrix[row].length) continue;

                matrix[r][c] = Math.max(0, matrix[r][c] - damage);
            }
        }

        return matrix;
    }
}
/*
solve([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);

solve([
    '10 30 40',
    '100 15 20',
    '0 5 20',
    '0,0 1,1 2,2'
]);

solve([
    '10 10 10',
    '10 15 10',
    '0,0 0,2 1,0 1,2',
]);
*/
solve([
    '10',
    '0,0',
]);

solve([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
]);