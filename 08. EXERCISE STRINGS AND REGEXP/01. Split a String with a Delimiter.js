function solve(text, delimiter) {
    let result = text.split(delimiter);

    console.log(result.join(`\n`));
}

solve('One-Two-Three-Four-Five', '-');