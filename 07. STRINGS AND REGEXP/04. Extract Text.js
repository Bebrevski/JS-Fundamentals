function solve(text) {
    let result = [];

    let open = text.indexOf('(', 0);
    let close = text.indexOf(')', 0);

    while (open !== -1 && close !== -1 && close > open){
        result.push(text.substring(open + 1, close));

        open = text.indexOf('(', close);
        close = text.indexOf(')', close + 1);
    }

    console.log(result.join(', '));
}

solve('Rakiya (.................................');