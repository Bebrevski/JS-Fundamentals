function solve(data) {

    let width = data[0];
    let height = data[1];
    let x = data[2];
    let y = data[3];

    let matrix = [];
    for (let i = 0; i < height; i++) {
        let arr = [];
        for (let j = 0; j < width; j++) {
            arr.push(0);
        }
        matrix.push(arr);
    }

    matrix[x][y] = 1;

    let number = 2;
    let rowStart = x;
    let rowEnd = x;
    let colStart = y;
    let colEnd = y;

    let counterRowEnd = rowEnd;
    let counterColEnd = colEnd;
    let counterRowStart = rowEnd;
    let counterColStart = colEnd;

    while (true) {

        counterRowEnd++;
        counterColEnd++;
        counterRowStart--;
        counterColStart--;

        if (counterRowEnd > width - 1 &&
            counterColEnd > height - 1 &&
            counterRowStart < 0 &&
            counterColStart < 0) {
            break;
        }
        if (rowEnd >= height - 1) {
            rowEnd = height - 1;
        }
        else {
            rowEnd++;
        }
        if (colEnd >= width - 1) {
            colEnd = width - 1;
        }
        else {
            colEnd++;
        }
        if (rowStart === 0) {
            rowStart = 0;
        }
        else {
            rowStart--;
        }
        if (colStart === 0) {
            colStart = 0;
        }
        else {
            colStart--;
        }

        for (let i = rowStart; i <= rowEnd; i++) {
            for (let j = colStart; j <= colEnd; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][j] = number;
                }
            }
        }
        number++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n') + '\n');
}

//solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);