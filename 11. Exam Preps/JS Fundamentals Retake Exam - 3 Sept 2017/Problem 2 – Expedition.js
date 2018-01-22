function solve(primary, secondary, overlay, start) {

    for (let i = 0; i < overlay.length; i++) {
        let [x, y] = overlay[i];

        primary = spinThatShit(primary, secondary, x, y);
    }

    let startRow = start[0];
    let startCol = start[1];
    let steps = 0;

    let foundWay = startWalkingDude(primary, startRow, startCol, steps);

    console.log(steps);

    if (foundWay) {
        if (startRow === 0) {
            console.log('Top');
        } else if (startRow === primary.length - 1) {
            console.log('Bottom');
        } else if (startCol === 0) {
            console.log('Left');
        } else if (startCol === primary[0].length - 1) {
            console.log('Right');
        }
    } else {

        let quadrant1 = startRow < primary.length / 2 && startCol > primary[0].length / 2;
        let quadrant2 = startRow < primary.length / 2 && startCol < primary[0].length / 2;
        let quadrant3 = startRow > primary.length / 2 && startCol < primary[0].length / 2;
        let quadrant4 = startRow > primary.length / 2 && startCol > primary[0].length / 2;
        let quadrant = '';

        if (quadrant1) {
            quadrant = '1';
        } else if (quadrant2) {
            quadrant = '2';
        } else if (quadrant3) {
            quadrant = '3';
        } else if (quadrant4) {
            quadrant = '4';
        }

        console.log(`Dead end ${quadrant}`);
    }


    function startWalkingDude(primary, startRow, startCol, steps) {

        let isZero = primary[startRow - 1][startCol] === 0 || primary[startRow + 1][startCol] === 0 || primary[startRow][startCol - 1] === 0 || primary[startRow][startCol + 1] === 0;

        while (isZero) {

            let up = primary[startRow - 1][startCol] === 0;
            let down = primary[startRow + 1][startCol] === 0;
            let left = primary[startRow][startCol - 1] === 0;
            let right = primary[startRow][startCol + 1] === 0;

            if (up) {

                primary[startRow][startCol] = undefined;
                startRow--;
                steps++;

            } else if (down) {

                primary[startRow][startCol] = undefined;
                startRow++;
                steps++;

            } else if (left) {

                primary[startRow][startCol] = undefined;
                startCol--;
                steps++;

            } else if (right) {

                primary[startRow][startCol] = undefined;
                startCol++;
                steps++;

            }

            isZero = primary[startRow - 1][startCol] === 0 || primary[startRow + 1][startCol] === 0 || primary[startRow][startCol - 1] === 0 || primary[startRow][startCol + 1] === 0;
        }

        let out = startRow === primary.length - 1 ||
            startRow === 0 ||
            startCol === primary[0].length - 1 ||
            startCol === 0;

        if (out) {
            return true;
        }
        return false;

    }

    function spinThatShit(primary, secondary, x, y) {

        let endRow = Math.min(primary.length, secondary.length);
        let endCol = Math.min(primary[0].length, secondary[0].length);

        let secondaryRowEnd = 0;
        let secondaryColEnd = 0;

        for (let row = x; row < x + endRow; row++) {

            if (primary[row] === undefined) {
                return primary;
            }
            for (let col = y; col < y + endCol; col++) {

                if (primary[row][col] === undefined) {
                    break;
                }

                primary[row][col] = Math.abs(primary[row][col] - secondary[secondaryRowEnd][secondaryColEnd]);

                secondaryColEnd++;
            }

            secondaryColEnd = 0;
            secondaryRowEnd++;
        }

        return primary;
    }
}

solve([[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]);

solve([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0],
        [2, 1],
        [1, 0]],
    [2, 0]);