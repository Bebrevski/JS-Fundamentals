function solve(matrix) {
    let biggerstNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(row =>{
        row.forEach(col => biggerstNum = Math.max(biggerstNum, col))
    });

    console.log(biggerstNum);
}

solve([[20, 50, 10], [8, 33, 145]]);