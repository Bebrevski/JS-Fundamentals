function solve(arrayOfString) {
    let templateLength = Number(arrayOfString[0]);
    let templateMatrix = [];
    for (let i = 1; i <= templateLength; i++) {
        templateMatrix.push(arrayOfString[i].split(' ').map(Number));
    }

    let encodedMatrix = [];
    for (let i = templateLength + 1; i < arrayOfString.length; i++) {
        encodedMatrix.push(arrayOfString[i].split(' ').map(Number));
    }

    let endRow1 = Math.min(encodedMatrix.length, templateMatrix.length);
    let endCol1 = Math.min(encodedMatrix[0].length, templateMatrix[0].length);
    let rowStep = Math.min(encodedMatrix.length, templateMatrix.length);
    let colStep = Math.min(encodedMatrix[0].length, templateMatrix[0].length);
    for (let row1 = 0; row1 < encodedMatrix.length; row1 += rowStep) {
        for (let col1 = 0; col1 < encodedMatrix[0].length; col1 += colStep) {
            doCycle(row1, col1);
        }
    }

    let output = [];
    for (let row = 0; row < encodedMatrix.length; row++) {
        for (let col = 0; col < encodedMatrix[0].length; col++) {
            output.push(encodedMatrix[row][col]);
        }
    }

    console.log(output.join(''));

    function doCycle(row1, col1) {
        for (let row = 0; row < endRow1; row++) {
            for (let col = 0; col < endCol1; col++) {
                if ((row + row1 >= encodedMatrix.length) || (col + col1 >= encodedMatrix[0].length)){
                    continue;
                }

                let asciiCode = (encodedMatrix[row + row1][col + col1] + templateMatrix[row][col]) % 27;
                let letter = String.fromCharCode(asciiCode + 64);
                if (letter === '@') {
                    letter = ' ';
                }

                encodedMatrix[row + row1][col + col1] = letter;
            }
        }
    }
}

/*
AUTHOR solution

function solve(input) {
    // Get size of code
    let n = Number(input.shift());

    // Initialize code matrix
    let code = [];
    for (let i = 0; i < n; i++) {
        code.push(input.shift().split(' ').map(Number));
    }

    // Initialize message matrix
    let matrix = [];
    for (let row of input) {
        matrix.push(row.split(' ').map(Number));
    }

    // Initialize decoded message
    let result = '';

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col< matrix[0].length; col++) {
            let current = matrix[row][col];
            let modifier = code[row % code.length][col % code[0].length];
            result += String.fromCharCode(((current + modifier) % 27) + 64);
        }
    }

    result = result.replace(/@/g, ' ');
    console.log(result);
}
 */