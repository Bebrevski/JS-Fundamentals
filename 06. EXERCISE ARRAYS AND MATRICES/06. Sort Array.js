function solve(arr) {
    let result = arr.sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    console.log(result.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

solve(['test', 'Deny', 'omen', 'Default']);