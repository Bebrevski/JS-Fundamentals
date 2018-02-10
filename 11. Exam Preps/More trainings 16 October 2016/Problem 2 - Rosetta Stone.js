function solve(input) {
    let templateMatrixLength = Number(input.shift());
    let templateMatrix = [];
    let encodedMatrix = [];

    for (let i = 0; i < templateMatrixLength; i++) {
        templateMatrix.push(input[i].split(' ').map(Number));
    }

    for (let i = templateMatrixLength; i < input.length; i++) {
        encodedMatrix.push(input[i].split(' ').map(Number));
    }

    let endRow = Math.min(templateMatrix.length, encodedMatrix.length);
    let endCol = Math.min(templateMatrix[0].length, encodedMatrix[0].length);
    for (let row = 0; row < encodedMatrix.length; row += endRow) {
        for (let col = 0; col < encodedMatrix[row].length; col += endCol) {
            startDecoding(row, col)
        }
    }

    let output = '';
    for (let row of encodedMatrix) {
        output += row.join('');
    }

    console.log(output);

    function startDecoding(startRow, startCol) {
        for (let row = 0; row < endRow; row++) {
            if(row + startRow >= encodedMatrix.length) continue;
            for (let col = 0; col < endCol; col++) {
                if(col + startCol >= encodedMatrix[0].length) continue;

                let result = ((encodedMatrix[row + startRow][col + startCol] + templateMatrix[row][col]) % 27) + 64;

                if (result === 64){
                    encodedMatrix[row + startRow][col + startCol] = ' ';
                }else {
                    encodedMatrix[row + startRow][col + startCol] = String.fromCharCode(result);
                }
            }
        }
    }
}

solve(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
);