function solve(x, y) {

    let matrix = [];

    for (let i = 0; i < x; i++) {
        matrix.push([]);
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = x - 1;
    let endCol = y - 1;
    let number = 1;

    while (startRow <= endRow || startCol <= endCol) {

        for (let right = startCol; right <= endCol; right++) {
            matrix[startRow][right] = number++;
        }

        for (let down = startRow + 1; down <= endRow; down++) {
            matrix[down][endCol] = number++;
        }

        for (let left = endCol - 1; left >= startCol; left--) {
            matrix[endRow][left] = number++;
        }

        for (let up = endRow - 1; up > startRow; up--) {
            matrix[up][startCol] = number++;
        }

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

solve(5, 5);
solve(3, 3);