function solve(text) {
    let pattern = /\b(?:_)([a-zA-Z0-9]+)\b/gm;

    let result = [];

    let match = pattern.exec(text);

    while (match !== null) {
        result.push(match[1]);

        match = pattern.exec(text);
    }

    console.log(result.join(','));
}

solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
solve('Calculate the _area of the _perfectRectangle object.');