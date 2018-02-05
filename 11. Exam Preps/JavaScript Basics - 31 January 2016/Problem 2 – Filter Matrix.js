function solve(input) {

    let sequenceLength = Number(input.pop());
    let resultMatrix = [];
    for (let line of input) {
        line = line.split(' ');
        resultMatrix.push(line);
    }
    let matrix = input.join(' ').split(' ');

    for (let row = 0; row < matrix.length; row++) {
        let currentNum = matrix[row];
        let count = 1;

        for (let elem = row + 1; elem < sequenceLength + row; elem++) {
            if (elem > matrix.length) {
                break;
            }

            if (currentNum === matrix[elem]) {
                count++;
            }
            if (count === sequenceLength) {
                for (let i = row; i < sequenceLength + row; i++) {
                    matrix[i] = undefined;
                }
                row += sequenceLength - 1;
                break;
            }
        }
        if (row + sequenceLength > matrix.length) {
            break;
        }
    }

    let index = 0;
    for (let row = 0; row < resultMatrix.length; row++) {
        for (let col = 0; col < resultMatrix[row].length; col++) {
            if (matrix[index] === undefined) {
                resultMatrix[row].splice(col, 1);
                col--;
            }
            index++;
        }
    }

    resultMatrix.forEach(line => {
        if (line.length === 0) {
            console.log('(empty)');
        } else {
            console.log(line.join(' '));
        }
    });
}

/*
solve([
    '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2'
]);
*/

solve([
    'a a a a a b',
    'a a a a k',
    'j a a',
    '2'
]);