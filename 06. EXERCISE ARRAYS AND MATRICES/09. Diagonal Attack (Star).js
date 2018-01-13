function solve(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = matrix[i].split(' ').map(Number);
    }

    let firstDiagonalSum = 0;

    for (let i = 0; i < newMatrix.length; i++) {
        firstDiagonalSum += newMatrix[i][i];
    }

    let secondDiagonalSum = 0;

    for (let i = newMatrix.length - 1; i >= 0; i--) {
        secondDiagonalSum += newMatrix[i][i];
    }

    if (firstDiagonalSum === secondDiagonalSum) {

        let index1 = 0;
        let index2 = newMatrix[0].length - 1;

        for (let row = 0; row < newMatrix.length; row++) {

            for (let col = 0; col < newMatrix[row].length; col++) {
                if (col !== index1 && col !== index2) {
                    newMatrix[row][col] = firstDiagonalSum;
                }
            }

            index1++;
            index2--;
        }

        console.log(newMatrix.map(row => row.join(' ')).join('\n'));

    } else {

        console.log(newMatrix.map(row => row.join(' ')).join('\n'));

    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);