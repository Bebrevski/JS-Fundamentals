function solve(text) {
    let pattern = /[^\s();.,]+/g;

    let result = text.match(pattern);

    console.log(result.join('\n'));
}

solve('let sum = 4 * 4,b = "wow";');
solve('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');